import React, { useState } from "react";

const Movie = () => {
  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("./img/inception1.jpg");
  const handleToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("./img/inception2.jpg");
      console.log(btn);
    } else {
      setBtn(true);
      setSrc("./img/inception1.jpg");
      console.log(btn);
    }
  };
  return (
    <div>
      <img src={src} alt="" width="300" height="500" />
      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default Movie;
