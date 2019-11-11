// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";

test("App renders correctly", () => {
  expect(render(<Dashboard />)).toMatchSnapshot;
});
