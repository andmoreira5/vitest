import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import ToggleSwitch from "./ToggleSwitch.jsx";
import { test } from "vitest";
import { expect } from "vitest";
import { vi } from "vitest";

describe("ToggleSwitch", () => {
  let handleToggle;
  let toggleTestId;
  beforeEach(() => {
    handleToggle = vi.fn();
    render(
      <ToggleSwitch label={"Toggle"} isOn={false} handleToggle={handleToggle} />
    );
    toggleTestId = screen.getByTestId("toggle-switch");
  });

  test("Should be able to see the component on the screen", () => {
    expect(toggleTestId).toBeInTheDocument();
  });

  test('Should be able to toggle the switch to "on/off" state', () => {
    //Verify that the toggle button was correctly initialized with the off option
    expect(toggleTestId).not.toBeChecked();
    fireEvent.click(toggleTestId);
    expect(toggleTestId).toBeChecked();
    fireEvent.click(toggleTestId);
    expect(toggleTestId).not.toBeChecked();
  });

  test("Should call handleToggle function when the component was clicked", () => {
    fireEvent.click(toggleTestId);
    expect(toggleTestId).toBeChecked();
    expect(handleToggle).toHaveBeenCalledOnce();
    expect(handleToggle).toHaveBeenCalledWith(true);
    fireEvent.click(toggleTestId);
    expect(toggleTestId).not.toBeChecked();
    expect(handleToggle).toHaveBeenCalledWith(false);
  });
});
