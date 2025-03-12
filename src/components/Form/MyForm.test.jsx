import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, test, expect } from "vitest";
import MyForm from "./MyForm.jsx";
import { elementsForm } from "../../data/structure form.js";
import { form } from "../../data/dataTests.js";
import { vi } from "vitest";

describe("Form", () => {
  beforeEach(() => {
    render(<MyForm />);
  });

  test("Renders form with the name and email fields", () => {
    Object.keys(elementsForm).forEach((el) => {
      expect(
        screen.getAllByLabelText(new RegExp(el, "i")).length
      ).toBeGreaterThan(0);
    });
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("Can type in the form fields", () => {
    Object.keys(elementsForm).forEach((el) => {
      const input = screen.getByLabelText(new RegExp(el, "i"));
      fireEvent.change(input, { target: { value: form[el] } });
      expect(input.value).toBe(form[el]);
    });
  });

  test("Shows error when submitting with empty fields", async () => {
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      Object.keys(elementsForm).forEach((el) => {
        const errorMessage = screen.getByText(
          new RegExp(`${el} is required`, "i")
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  test("Submits the form successfully when all fields are filled", async () => {
    const consoleSpy = vi.spyOn(console, "log"); //mock of console.log

    Object.keys(elementsForm).forEach((el) => {
      const input = screen.getByLabelText(new RegExp(el, "i")); //search an input with the label. "i" is case insensitive.
      fireEvent.change(input, { target: { value: form[el] } }); //Change the value in input
      expect(input.value).toBe(form[el]); //Verify if the value was typed correctly
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "Form Submitted",
        expect.objectContaining(form)
      );
      // toHaveBeenCalledWith checks if it was called with the correct arguments.
    });

    consoleSpy.mockRestore(); //cleans the mock to not disturb the next tests
  });
});
