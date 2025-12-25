import React from "react";

const BG = ({ children }) => {
  return (
      <div className="Bgcontainer">
      {children}
      <div className="BgImage">
        <img src="./bg.png" alt="Background" />
      </div>
    </div>
  );
};

export default BG;
