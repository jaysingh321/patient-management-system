import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Input component", () => {
  test("renders inputElement with user specified props", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        value="Test"
        className="test-input"
        onChange={onChangeMock}
        required
        placeHolder="Test placeholder"
        disabled
      />
    );

    const inputElement = getByPlaceholderText("Test placeholder");

    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveValue("Test");
    expect(inputElement).toHaveClass("test-input");
    expect(inputElement).toBeRequired();
    expect(inputElement).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
