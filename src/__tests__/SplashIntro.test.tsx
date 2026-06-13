import { render, screen, fireEvent } from "@testing-library/react";
import SplashIntro from "@/components/SplashIntro";
import { vi, describe, it, expect } from "vitest";

describe("SplashIntro Component", () => {
  it("renders logo mark and wordmark images", () => {
    render(<SplashIntro onGetStarted={vi.fn()} isExiting={false} />);
    const images = screen.getAllByRole("img");
    // Includes background, icon, and wordmark
    expect(images.length).toBeGreaterThanOrEqual(2);
  });

  it("renders Get Started button", () => {
    render(<SplashIntro onGetStarted={vi.fn()} isExiting={false} />);
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  it("calls onGetStarted when clicked", () => {
    const mockOnGetStarted = vi.fn();
    render(<SplashIntro onGetStarted={mockOnGetStarted} isExiting={false} />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);
    expect(mockOnGetStarted).toHaveBeenCalled();
  });
});
