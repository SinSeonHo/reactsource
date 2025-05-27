import React, { createContext, useState } from "react";

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);

  return <ToggleContext value={{ isOn, toggle }}>{children}</ToggleContext>;
};

// 여러개 내보내려면 default 제거
export { ToggleContext, ToggleProvider };
