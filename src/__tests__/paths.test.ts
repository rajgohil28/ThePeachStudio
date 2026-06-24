import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getAssetPath } from "@/utils/paths";

describe("paths utility - getAssetPath", () => {
  const originalEnv = process.env.NEXT_PUBLIC_BASE_PATH;

  beforeEach(() => {
    // Clear NEXT_PUBLIC_BASE_PATH before each test to have a clean starting point
    delete process.env.NEXT_PUBLIC_BASE_PATH;
  });

  afterEach(() => {
    // Restore the original environment variable after each test
    if (originalEnv !== undefined) {
      process.env.NEXT_PUBLIC_BASE_PATH = originalEnv;
    } else {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    }
  });

  it("should return the path unchanged if NEXT_PUBLIC_BASE_PATH is empty or not set", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "";
    expect(getAssetPath("/images/contact/close-icon.svg")).toBe("/images/contact/close-icon.svg");

    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(getAssetPath("/images/contact/close-icon.svg")).toBe("/images/contact/close-icon.svg");
  });

  it("should prepend NEXT_PUBLIC_BASE_PATH if set and path starts with a slash", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/ThePeachStudio";
    expect(getAssetPath("/images/contact/close-icon.svg")).toBe("/ThePeachStudio/images/contact/close-icon.svg");
  });

  it("should return the path unchanged if it does not start with a slash", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/ThePeachStudio";
    expect(getAssetPath("images/contact/close-icon.svg")).toBe("images/contact/close-icon.svg");
    expect(getAssetPath("https://example.com/logo.png")).toBe("https://example.com/logo.png");
  });
});
