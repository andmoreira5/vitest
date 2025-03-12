import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import RadioGroup from "./RadioGroup.jsx";
import { expect } from "vitest";
import { test } from "vitest";
import { vi } from "vitest";
import { seasons } from "../../data/dataTests.js";

describe("RadioGroup", () => {
  let handleChange;
  beforeEach(() => {
    handleChange = vi.fn();
    render(
      <RadioGroup options={seasons} name={seasons} onChange={handleChange} />
    );
  });

  test("Should be able to see the components on the screen", () => {
    seasons.forEach((el) => {
      expect(screen.getByTestId(`${el}-label-radio`)).toBeInTheDocument();
      expect(screen.getByTestId(`${el}-radio`)).toBeInTheDocument();
    });
  });

  test("Should call onChange when selecting a radio button", () => {
    const radio = screen.getByTestId(`${seasons[0]}-radio`);
    fireEvent.click(radio);
    expect(radio).toBeChecked();
    //verify that the onChange function was called once.
    expect(handleChange).toHaveBeenCalledOnce();
    //verify that onChange function was called with the value of the seasons[0]
    expect(handleChange).toHaveBeenCalledWith(seasons[0]);
  });

  test("Should only allow one radio button to be selected at a time", () => {
    seasons.forEach((el, index) => {
      const itemId = screen.getByTestId(`${el}-radio`);
      fireEvent.click(itemId);
      expect(itemId).toBeChecked();
      seasons.forEach((otherEl, otherIndex) => {
        if (otherIndex != index) {
          const otherItemId = screen.getByTestId(`${otherEl}-radio`);
          expect(otherItemId).not.toBeChecked();
        }
      });
    });
  });
});
