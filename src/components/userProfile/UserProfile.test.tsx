import { render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  beforeEach(() => {
    // Mock the fetch function to return a resolved promise with user data
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    // Clean up the mock after each test
    vi.restoreAllMocks();
  });
  it("fetches and displays user data", async () => {
    globalThis.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 1,
        name: "Khaldoon",
        email: "khaldoon@gmail.com",
      }),
    });

    render(<UserProfile userId={4} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      //   expect(screen.getByText(/khaldoon/i)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /khaldoon/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/khaldoon@gmail.com/i)).toBeInTheDocument();
    });
  });
});
