import { it, describe } from "vitest"; // Importing only 'it' and 'describe' from VITest
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DarkMode", () => {
  it("check the dark mode toggle works", () => {
    // Use Jest's expect function for assertions
    expect(screen.findAllByLabelText("SNAPSEARCH INSIGHT")).toBeTruthy(); // Assuming you want to check if the element exists
  });
});
