import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import MyForm from "./MyForm.jsx";
import { test } from "vitest";
import { expect } from "vitest";
import { elementsForm } from "../../data/structure form.js";
import { form } from "../../data/dataTests.js";

describe("Form", () => {
  beforeEach(() => {
    render(<MyForm />);
  });

  test("Renders form with the name and email fields", () => {
    Object.keys(elementsForm).forEach((el) => {
      expect(screen.getAllByLabelText(new RegExp(el, "i")));
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
        expect(
          screen.getByText(new RegExp(el + " is required", "i"))
        ).toBeInTheDocument();
      });
    });
  });

  //   test("Submits the form successfully with valid inputs", async () => {
  //     Object.keys(elementsForm).forEach((el) => {
  //       fireEvent.change(
  //         screen.getAllByLabelText(new RegExp(el, "i"), {
  //           target: { value: form[el] },
  //         })
  //       );
  //     });
  //     fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  //     await waitFor(() => {
  //       expect(console.log).toHaveBeenCalledWith("Form Submitted", form);
  //     });
  //   });
});
