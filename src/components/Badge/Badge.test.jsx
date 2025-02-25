import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import { describe } from "vitest";
import Badge from "./Badge.jsx";
import { FaCheckCircle } from "react-icons/fa";

describe("Badge", () => {
  let badgeTestId;
  beforeEach(() => {
    render(<Badge text="Aprovado" color="green" icon={FaCheckCircle} />);
    badgeTestId = screen.getByTestId("badge");
  });

  test("Should be able to see the component on the screen", () => {
    expect(badgeTestId).toBeInTheDocument();
  });

  // test('Should be able to see ')
});
