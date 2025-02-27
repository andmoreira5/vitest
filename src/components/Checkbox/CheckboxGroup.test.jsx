import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import CheckboxGroup from "./CheckboxGroup.jsx";
import { test } from "vitest";
import { expect } from "vitest";
import { fruits } from "../../data tests/dataTests.js";

describe("Checkbox", () => {
  beforeEach(() => {
    render(<CheckboxGroup fruits={fruits} disabledFruits={[fruits[0]]} />);
    screen.debug();
  });

  test("Should be able to render all items on the screen", () => {
    fruits.forEach((el) => {
      expect(screen.getByTestId(`checkbox-${el}`)).toBeInTheDocument();
    });
  });

  test("None of the checkboxes should be selected upon initialization", () => {
    fruits.forEach((el) => {
      expect(screen.getByTestId(`checkbox-${el}`)).not.toBeChecked();
    });
  });

  test("Ensure that all checkboxes will be marked or unmarked", () => {
    fruits.forEach((el) => {
      const item = screen.getByTestId(`checkbox-${el}`);
      fireEvent.click(item);
      expect(item).toBeChecked();
      fireEvent.click(item);
      expect(item).not.toBeChecked();
    });
  });

  // test("Should not allow selecting a disabled checkbox", () => {
  //   const itemDisabledTest = screen.getByTestId(`checkbox-${fruits[0]}`);
  //   expect(itemDisabledTest).toBeDisabled();
  //   console.log(itemDisabledTest.disabled);
  //   fireEvent.click(itemDisabledTest);
  //   expect(itemDisabledTest).not.toBeChecked();
  // });
});
