import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");

  const sayHello = () => {
    setMessage("안녕하세요");
  };
  const sayGoodbye = () => {
    setMessage("안녕히가세요");
  };

  const colorRed = () => {
    setColor("red");
  };
  const colorBlue = () => {
    setColor("blue");
  };
  const colorGreen = () => {
    setColor("green");
  };

  return (
    <div>
      <div>
        <button onClick={sayHello}>입장</button>
        <button onClick={sayGoodbye}>퇴장</button>
      </div>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={colorRed}>
        빨간색
      </button>
      <button style={{ color: "blue" }} onClick={colorBlue}>
        파란색
      </button>
      <button style={{ color: "green" }} onClick={colorGreen}>
        {" "}
        초록색
      </button>
    </div>
  );
};

export default Say;
