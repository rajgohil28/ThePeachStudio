import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProjectDetail from "@/components/ProjectDetail";
import React from "react";

describe("Project Detail Component", () => {
  it("renders a valid project detail component with all high-fidelity details (sealink)", () => {
    // Render the client component
    render(<ProjectDetail projectId="sealink" onClose={vi.fn()} />);

    // Verify Title
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("sealink");

    // Verify Subtitle/Location
    expect(screen.getByText("Facebook Office, Mumbai")).toBeInTheDocument();

    // Verify Quote
    expect(screen.getByText(/“The sun above. The ocean below...”/i)).toBeInTheDocument();

    // Verify Dimensions and Materials
    expect(screen.getByText(/8 ft \(h\) X 23 ft \(w\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Acrylic paints, Asian royal water-base paints/i)).toBeInTheDocument();

    // Verify Back Button is present
    const backBtn = screen.getByRole("button", { name: "Go back to landing page" });
    expect(backBtn).toBeInTheDocument();
  });

  it("returns null when the project id does not exist in the dataset", () => {
    const { container } = render(<ProjectDetail projectId="non-existent-project" onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();
  });
});
