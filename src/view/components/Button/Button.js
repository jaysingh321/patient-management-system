import React from "react";
import { string } from "prop-types";
import "../Button/button.scss";

const Button = ({ name, className, onClick }) => (
  <button onClick={onClick} className={className}>
    {name}
  </button>
);

Button.propTypes = {
  name: string,
};

Button.defaultProps = {
  name: "Click",
};

export default Button;
