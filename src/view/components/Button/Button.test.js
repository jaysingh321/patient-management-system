import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button", () => {
  it("renders the button with default props", () => {
    const { getByRole } = render(<Button />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click");
  });

  test("should render button with provided props", () => {
    const { getByRole } = render(<Button name="Add User" />);
    const button = getByRole("button");
    expect(button).toHaveTextContent("Add User");
  });

  test("should render button with provided className", () => {
    const { getByRole } = render(<Button className="primary-button" />);
    const button = getByRole("button");
    expect(button).toHaveClass("primary-button");
  });

  test("should call onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
