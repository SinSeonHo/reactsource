import React, { useState } from "react";
import MyButton from "./MyButton";

const MyApp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const btn1 = {
    padding: "16px",
    background: "red",
  };

  const btn2 = {
    padding: "20px",
    background: "gray",
  };

  return (
    <div>
      {/* 자식에게 속성방식으로 props 전달 */}
      <MyButton onClick={handleClick} count={count} style={btn1}></MyButton>
      <MyButton onClick={handleClick} count={count} style={btn2}></MyButton>
    </div>
  );
};

export default MyApp;
