// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

test("Controls render correctly", () => {
  expect(render(<Controls />)).toMatchSnapshot;
});

// ! buttons' text changes to reflect the state the door will be in if clicked
// ! provide buttons to toggle the `closed` states
test("gate can be toggled open on click.", () => {
  const toggleToOpen = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleToOpen} closed={true} />
  );

  const openButton = getByText(/open/i);
  fireEvent.click(openButton);
  expect(toggleToOpen).toHaveBeenCalled();
});

test("gate can be toggled closed on click.", () => {
  const toggleToClose = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleToClose} closed={false} />
  );

  const closeButton = getByText(/close/i);
  fireEvent.click(closeButton);
  expect(toggleToClose).toHaveBeenCalled();
});

// ! the closed toggle button is disabled if the gate is locked
test("gate cannot be opened when locked.", () => {
  const toggleToOpen = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleToOpen} closed={false} locked={true} />
  );

  const openButton = getByText(/close/i);
  fireEvent.click(openButton);
  expect(toggleToOpen).not.toHaveBeenCalled();
});

// ! the locked toggle button is disabled if the gate is open
test("gate cannot be closed when locked.", () => {
  const toggleToClose = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleToClose} closed={false} locked={true} />
  );

  const closeButton = getByText(/close/i);
  fireEvent.click(closeButton);
  expect(toggleToClose).not.toHaveBeenCalled();
});
