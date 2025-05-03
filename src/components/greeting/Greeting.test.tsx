import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Greeting from "./Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("render a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
  it("render greeting with a name", () => {
    render(<Greeting name="Khaldoon" />);
    // const text = screen.getByText("Hello, Khaldoon!");
    // expect(text).toBeInTheDocument();
    expect(screen.getByText("Hello, Khaldoon!")).toBeInTheDocument();
  });
});
