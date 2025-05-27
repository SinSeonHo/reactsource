import React from "react";
import Child1 from "./Child1";
import { CountProvider } from "../contexts/CountContext";
import { ToggleProvider } from "../contexts/ToggleContext";
import Child3 from "./Child3";

const Consumer = () => {
  return (
    <>
      <CountProvider>
        <h2>Count Consumer</h2>
        <Child1></Child1>
      </CountProvider>
      <ToggleProvider>
        <h2>Toggle Consumer</h2>
        <Child3></Child3>
      </ToggleProvider>
    </>
  );
};

export default Consumer;
