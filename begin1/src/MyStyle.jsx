import React from "react";

const MyStyle = () => {
  const style = {
    background: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <div>
      <div style={style}>홍길동</div>
      <div style={{ color: "red", fontSize: "25px" }}>홍길동</div>
      {/* class == className, maxlength == maxLength, readonly == readOnly */}
      <input type="text" className="class" maxLength={20} readOnly={false}></input>
      <br></br>
    </div>
  );
};

export default MyStyle;
