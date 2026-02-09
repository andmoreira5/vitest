import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import { describe } from "vitest";
import Badge from "./Badge.jsx";
import { FaCheckCircle } from "react-icons/fa";

describe("Badge", () => {
  let badgeTestId;
  let iconTestId;
  let newRender;
  // Setup the test before each test case
  beforeEach(() => {
    const { rerender } = render(
      <Badge text="Aprovado" color="green" icon={FaCheckCircle} size="sm" />,
    );
    badgeTestId = screen.getByTestId("badge");
    iconTestId = screen.getByTestId("badge-icon");
    newRender = rerender;
  });

  test("Should be able to see the component on the screen", () => {
    expect(badgeTestId).toBeInTheDocument();
  });

  test("Should render the Badge with the correct text", () => {
    expect(badgeTestId).toHaveTextContent("Aprovado");
  });

  test("Ensure that the color and the text have been applied correctly", () => {
    expect(badgeTestId).toHaveClass(
      "bg-green-200 text-green-800 text-xs px-2 py-1",
    );
  });

  test("Should render with the icon when the icon prop is provided", () => {
    expect(iconTestId).toBeInTheDocument();
  });

  // New render for the test with no icon
  test("Should not render the icon when the icon prop is not provided", () => {
    // Rerender the Badge without the icon prop.
    //I need to use newRender when I want to render the component with other properties.
    newRender(<Badge text="Aprovado" color="green" size="sm" />);
    // Expect the icon to be null
    expect(screen.queryByTestId("badge-icon")).toBeNull();
  });
});
