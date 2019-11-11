// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

test("Controls renders correctly", () => {
  expect(render(<Controls />)).toMatchSnapshot;
});
