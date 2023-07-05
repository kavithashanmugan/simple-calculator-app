import "./Button.css";

import React from "react";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <button
      className="button-wrapper"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  );
};

export default Button;
