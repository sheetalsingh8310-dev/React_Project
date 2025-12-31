import React from "react";
import { useState, useRef } from "react";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

const data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, Setcount] = useState(0);
  const [lock, setLock] = useState(false);
  let boxRef = useRef([]);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num] = "O";
    }

    Setcount((prev) => prev + 1);
    checkwin();
  };

  const checkwin = () => {
    if (data[0] && data[0] === data[1] && data[1] === data[2]) won(data[0]);
    else if (data[3] && data[3] === data[4] && data[4] === data[5])
      won(data[3]);
    else if (data[6] && data[6] === data[7] && data[7] === data[8])
      won(data[6]);
    else if (data[0] && data[0] === data[3] && data[3] === data[6])
      won(data[0]);
    else if (data[1] && data[1] === data[4] && data[4] === data[7])
      won(data[1]);
    else if (data[2] && data[2] === data[5] && data[5] === data[8])
      won(data[2]);
    else if (data[0] && data[0] === data[4] && data[4] === data[8])
      won(data[0]);
    else if (data[2] && data[2] === data[4] && data[4] === data[6])
      won(data[2]);
  };

  const won = (winner) => {
    setLock(true);

    if (winner === "X") {
      titleRef.current.innerHTML = "Congratulations : Cross is winnner";
    } else {
      titleRef.current.innerHTML = "Congratulations : Circle is winnner";
    }
  };

  const reset = () => {
    setLock(false);
    Setcount(0);

    data.fill("");

    boxRef.current.forEach((box) => {
      box.innerHTML = "";
    });

    titleRef.current.innerHTML = `TicTacToe Game In <span>React</span>`;
  };

  return (
    <div>
      <h1 className="title" ref={titleRef}>
        TicTacToe Game In <span>React</span>
      </h1>
      |<br></br>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => toggle(e, 0)}
            ref={(el) => (boxRef.current[0] = el)}
          ></div>
          <div
            className="boxes"
            onClick={(e) => toggle(e, 1)}
            ref={(el) => (boxRef.current[1] = el)}
          ></div>
          <div
            className="boxes"
            onClick={(e) => toggle(e, 2)}
            ref={(el) => (boxRef.current[2] = el)}
          ></div>
        </div>

        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => toggle(e, 3)}
            ref={(el) => (boxRef.current[3] = el)}
          ></div>
          <div
            className="boxes"
            onClick={(e) => toggle(e, 4)}
            ref={(el) => (boxRef.current[4] = el)}
          ></div>
          <div
            className="boxes"
            onClick={(e) => toggle(e, 5)}
            ref={(el) => (boxRef.current[5] = el)}
          ></div>
        </div>

        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => toggle(e, 6)}
            ref={(el) => (boxRef.current[6] = el)}
          ></div>
          <div
            className="boxes"
            onClick={(e) => toggle(e, 7)}
            ref={(el) => (boxRef.current[7] = el)}
          ></div>
          <div
            className="boxes"
            onClick={(e) => toggle(e, 8)}
            ref={(el) => (boxRef.current[8] = el)}
          ></div>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
