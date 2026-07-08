import { render, screen, fireEvent } from "@testing-library/react";
import MainLanding from "@/components/MainLanding";
import { vi, describe, it, expect } from "vitest";

describe("MainLanding Component", () => {
  it("renders the high-fidelity tagline 'meaningful art... memorable spaces!'", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    // Verify that 'meaningful art... memorable spaces!' is rendered in the main h1 heading
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/meaningful art\.\.\.\s*memorable spaces!/i);
  });

  it("renders the curated works section and lists projects", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    // Verify that curated works heading is present
    expect(screen.getByText(/curated/i)).toBeInTheDocument();
    // Verify that a project row like 'sealink' is rendered
    expect(screen.getByText("sealink")).toBeInTheDocument();
    expect(screen.getByText("the soul of konkan")).toBeInTheDocument();
  });

  it("renders the 'from sketch to space' process timeline steps", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    expect(screen.getByText(/from sketch/i)).toBeInTheDocument();
    expect(screen.getByText("Start with the Space")).toBeInTheDocument();
    expect(screen.getByText("Shape the Idea")).toBeInTheDocument();
  });

  it("renders client testimonials with Sarah, Marcus and Elena", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    expect(screen.getByText("Sarah Jenkins")).toBeInTheDocument();
    expect(screen.getByText("Marcus Chen")).toBeInTheDocument();
    expect(screen.getByText("Elena Rostova")).toBeInTheDocument();
  });

  it("renders the peachy team section profiles", () => {
    render(<MainLanding onStartConversation={vi.fn()} />);
    expect(screen.getByText("Maitreyee Nilawar")).toBeInTheDocument();
    expect(screen.getByText("Poorva Kelkar")).toBeInTheDocument();
  });

  it("renders the 'Start a Conversation' CTA button in CTA section", () => {
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
