import React, { useState } from "react";

const InputSample = () => {
  // [변수명, 함수명] = useState(초기값);
  const [text, setText] = useState("");

  const handleChanged = (e) => {
    // alert(e.target.value);
    setText(e.target.value);
  };

  const handelReset = () => {
    setText("");
  };

  return (
    <div>
      <input type="text" onChange={handleChanged} value={text} />
      <button onClick={handelReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
};

export default InputSample;
