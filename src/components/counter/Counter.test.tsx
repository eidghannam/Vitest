import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import "@testing-library/jest-dom/vitest";

describe("Counter", () => {
  it("increments the count when the button is clicked", async () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: /increment/i });
    const counterValue = screen.getByTestId("counter-value");

    // Test initial value of the counter
    expect(counterValue.textContent).toEqual("0");

    // Simulate button click
    await userEvent.click(button);

    // Test updated value of the counter
    expect(counterValue.textContent).toEqual("1");
  });
});
