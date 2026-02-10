import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe, beforeEach, vi } from "vitest";
import Button from "./Button.jsx";

const buttonTestID = "button";
const handleClick = vi.fn();

//getByTestId points to all buttons on the screen, to all inputs, etc
describe("Button", () => {
  beforeEach(() => {
    //before each test
    render(<Button onClick={handleClick}>Click on me!</Button>); //I want to render the button
  });

  //ensure that the component appears on the screen
  test("Should be able to render the button", () => {
    expect(screen.getByTestId(buttonTestID)).toBeInTheDocument();
  });

  //ensure that the component is dynamic.
  test("Should be able to render based on the children prop", () => {
    expect(screen.getByTestId(buttonTestID)).toHaveTextContent("Click on me!");
  });

  //to fire event means to trigger an event.
  //so, here it's about to handle clicks, inputs, forms..., in other words,
  // events that an user would perform, but now through automated tests.
  test("Should be able to fire event", () => {
    fireEvent.click(screen.getByTestId(buttonTestID));
    expect(handleClick).toHaveBeenCalledTimes(1); //should be called once
  });

  test("Should be able to have default styles", () => {
    expect(screen.getByTestId(buttonTestID)).toHaveStyle({
      width: "100%",
      maxWidth: "380px",
      height: "40px",
      backgroundColor: "#b6e06b",
      color: "#222",
    });
  });
});
