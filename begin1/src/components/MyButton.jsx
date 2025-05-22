import React, { useState } from "react";

// 부모로부터 props 받아서 한꺼번에 적용
const MyButton = ({ onClick, count, style }) => {
  return (
    <div>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
