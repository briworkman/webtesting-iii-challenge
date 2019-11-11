// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

test("App renders correctly", () => {
  expect(render(<Display />)).toMatchSnapshot;
});
