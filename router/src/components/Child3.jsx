import React, { useContext } from "react";
import Child4 from "./Child4";
// 여러개중 필요한것만 가져오려면 {} 필요
import { ToggleContext } from "../contexts/ToggleContext";

const Child3 = () => {
  // context 가져오기
  const { isOn } = useContext(ToggleContext);
  return (
    <div>
      <h2>Child3</h2>
      <p>Toggle {isOn ? "On" : "Off"}</p>
      <Child4></Child4>
    </div>
  );
};

export default Child3;
