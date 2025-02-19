import { render } from "@testing-library/react"; //for rendered tests
import { describe, expect, test } from "vitest";
import App from "./App.jsx";

// ensure that the app is rendering
describe("App", () => {
  test("should be able to see the initial text on screen.");
  const { getByText } = render(<App />);
  expect(getByText("Hey, its working")).toBeInTheDocument();
});
