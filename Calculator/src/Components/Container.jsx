import React from "react";

function Container({ displayValue }) {
  return (
    <div className="container">
      {" "}
      <input
        type="text"
        value={displayValue}
        readOnly // Add this line to fix the error
        placeholder="0"
      />
    </div>
  );
} // value={displayValue}

export default Container;
