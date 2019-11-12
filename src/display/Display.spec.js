// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

test("Display renders correctly", () => {
  expect(render(<Display />)).toMatchSnapshot;
});

//! defaults to `unlocked` and `open`
test("default is unlocked and open", () => {
  const { getByText } = render(<Display />);
  getByText(/unlocked/i);
  getByText(/open/i);
});

//! displays if gate is open/closed and if it is locked/unlocked
test("displays if it is open or closed and locked or unlocked", () => {
  const { getByText } = render(<Display />);
  getByText(/locked/i) || getByText(/unlocked/i);
  getByText(/open/i) || getByText(/closed/i);
});

//! displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
test('displays "closed" if closed prop is true.', () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i);
});

test('displays "open" if closed prop is false.', () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/open/i);
});

//! when `unlocked` or `open` use the `green-led` class
test('uses "green-led" if open or unlocked.', () => {
  const { container } = render(<Display locked={false} closed={false} />);
  const greenLeds = container.querySelectorAll(".green-led");
  expect(greenLeds.length).toBe(2);
});

//!when `locked` or `closed` use the `red-led` class
test('uses "red-led" if closed or locked.', () => {
  const { container } = render(<Display locked={true} closed={true} />);
  const redLeds = container.querySelectorAll(".red-led");
  expect(redLeds.length).toBe(2);
});
