import React from "react";

function Button({ onButtonClick }) {
  const buttonName = [
    "C",
    "1",
    "2",
    "3",
    "9",
    "0",
    "8",
    "7",
    "5",
    "*",
    "/",
    "%",
    ")",
    "(",
    "4",
    "+",
    "6",
    "=",
  ];
  return (
    <div className="btn">
      {buttonName.map((buttonName, index) => (
        <button
          key={index} // Add this key prop to fix React warning
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default Button;
