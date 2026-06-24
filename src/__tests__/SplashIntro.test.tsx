import { render, screen } from "@testing-library/react";
import SplashIntro from "@/components/SplashIntro";
import { vi, describe, it, expect } from "vitest";

describe("SplashIntro Component", () => {
  it("renders logo mark and wordmark images", () => {
    render(<SplashIntro onGetStarted={vi.fn()} isExiting={false} />);
    const images = screen.getAllByRole("img");
    // Includes background, icon, and wordmark
    expect(images.length).toBeGreaterThanOrEqual(2);
  });

  it("does not render Get Started button anymore", () => {
    render(<SplashIntro onGetStarted={vi.fn()} isExiting={false} />);
    expect(screen.queryByRole("button", { name: /Get Started/i })).not.toBeInTheDocument();
  });
});
