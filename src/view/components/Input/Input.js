import React from "react";

const Input = ({
  type,
  value,
  className,
  onChange,
  required,
  placeHolder,
  disabled,
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeHolder}
    onChange={onChange}
    required={required}
    className={className}
    disabled={disabled}
  />
);

export default Input;
