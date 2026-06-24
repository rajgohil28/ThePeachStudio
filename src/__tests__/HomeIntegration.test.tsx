import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { vi, describe, it, expect } from "vitest";

// Mock SplashIntro to isolate and test the integration flow gracefully under JSDOM
vi.mock("@/components/SplashIntro", () => {
  return {
    default: ({ onGetStarted }: { onGetStarted: () => void }) => (
      <div data-testid="splash-mock">
        <span>scratch to unveil</span>
        <button data-testid="reveal-trigger" onClick={onGetStarted}>
          Simulate Full Reveal
        </button>
      </div>
    ),
  };
});

describe("Home Page Integration Flow", () => {
  it("successfully mounts on Splash and transitions to Landing Page on reveal", () => {
    // 1. Render the main page component
    render(<Home />);

    // 2. Verify that SplashIntro mock is initially rendered and visible
    expect(screen.getByTestId("splash-mock")).toBeInTheDocument();
    expect(screen.getByText(/scratch to unveil/i)).toBeInTheDocument();

    // 3. Verify that MainLanding tagline is NOT in the document initially
    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();

    // 4. Trigger the full reveal auto-transition
    const revealTrigger = screen.getByTestId("reveal-trigger");
    fireEvent.click(revealTrigger);

    // 5. Verify that Splash screen has been unmounted and MainLanding tagline is now displayed
    expect(screen.queryByTestId("splash-mock")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/We’re building our story\.\.\./i);
    expect(screen.getByRole("button", { name: /Start a Conversation/i })).toBeInTheDocument();
  });
});
