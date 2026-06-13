import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactModal from "@/components/ContactModal";
import { vi, describe, it, expect, beforeEach } from "vitest";

describe("ContactModal Component", () => {
  it("renders form fields and header when open", () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByText(/Let's make a/i)).toBeInTheDocument();
    expect(screen.getByText(/story together/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  it("displays validation errors on incomplete submit", () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Your Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  it("submits successfully and shows paper plane success state", async () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });

    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Thank you for sharing your story/i)).toBeInTheDocument();
    }, { timeout: 1500 });
  });
});
