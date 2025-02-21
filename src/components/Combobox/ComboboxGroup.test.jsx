import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import ComboboxGroup from "./ComboboxGroup.jsx";
import { animals } from "../../data tests/dataTests.js";
import { test } from "vitest";
import { expect } from "vitest";

describe("Combobox", () => {
  beforeEach(() => {
    render(<ComboboxGroup animals={animals} />);
  });

  test("Should be able to see the component on the screen", () => {
    animals.forEach((el) => {
      expect(screen.getByTestId(`${el}-input`)).toBeInTheDocument();
      expect(screen.getByTestId(`${el}-label`)).toBeInTheDocument();
    });
  });

  test("Ensure that the checkboxes will be marked or unmarked", () => {
    animals.forEach((el) => {
      const item = screen.getByTestId(`${el}-input`);
      fireEvent.click(item);
      expect(item).toBeChecked();
    });
  });
});
