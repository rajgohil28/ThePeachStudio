import { render, screen, fireEvent } from "@testing-library/react";
import MainLanding from "@/components/MainLanding";
import { vi, describe, it, expect } from "vitest";

describe("MainLanding Component", () => {
  it("renders the tagline text 'We’re building our story...'", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    // Verify that 'We’re building our story' is rendered
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/We’re building our story\.\.\./i);
  });

  it("renders the 'Start a Conversation' CTA button", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    expect(screen.getByRole("button", { name: /Start a Conversation/i })).toBeInTheDocument();
  });

  it("calls onStartConversation when CTA button is clicked", () => {
    const mockOnStartConversation = vi.fn();
    render(<MainLanding onStartConversation={mockOnStartConversation} />);
    const button = screen.getByRole("button", { name: /Start a Conversation/i });
    fireEvent.click(button);
    expect(mockOnStartConversation).toHaveBeenCalled();
  });
});
