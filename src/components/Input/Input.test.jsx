import { describe } from "vitest";
import Input from "./Input.jsx";
import { beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

const inputTestId = "input";

describe("Input", () => {
  beforeEach(() => {
    render(<Input placeholder="Digite algo..." type="text" />);
  });

  test("Should be able to see the input on the screen", () => {
    expect(screen.getByTestId(inputTestId)).toBeInTheDocument();
  });

  test("Should be able to see the placeholder correctly", () => {
    expect(screen.getByTestId(inputTestId)).toHaveAttribute(
      "placeholder",
      "Digite algo..."
    );
  });

  test("Should be able to update value when typing", async () => {
    const input = screen.getByTestId(inputTestId);
    await userEvent.type(input, "Test");
    expect(input).toHaveValue("Test");
  });
});
