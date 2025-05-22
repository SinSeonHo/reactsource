import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Card from "./Card";
import Product from "./Product";
import ParentCardLayout from "./ParentCardLayout";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputMultipleSample from "./inputMultipleSample";
import Say from "./Say";
import Movie from "./Movie";
import Hello from "./components/Hello";

import MyApp from "./components/MyApp";
import Home from "./components/Home";
import CounterRef from "./CounterRef";
import InputRef from "./InputRef";
import UserProfile from "./UserProfile";
import Form from "./Form";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      <h1>World</h1> */}
      {/* <MyComponent name="React">리액트</MyComponent> */}
      {/* <Product></Product> */}
      {/* <ParentCardLayout></ParentCardLayout> */}
      {/* <Counter></Counter> */}
      {/* <InputSample></InputSample> */}
      {/* <InputMultipleSample></InputMultipleSample> */}
      {/* <Say></Say> */}
      {/* <Movie></Movie> */}
      {/* <Hello></Hello> */}
      {/* <Home></Home> */}
      {/* <MyApp></MyApp> */}
      {/* <CounterRef></CounterRef> */}
      {/* <InputRef></InputRef> */}
      {/* <UserProfile></UserProfile> */}
      <Form></Form>
    </>
  );
}

export default App;
