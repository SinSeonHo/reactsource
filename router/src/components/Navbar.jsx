import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Navbar = () => {
  // useNavigate 사용
  const navigate = useNavigate();
  const navTo = (path) => navigate(path);
  return (
    <>
      <div>
        {/* A태그 대신 Link사용 */}
        <Link to={"/"}>HOME</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
      </div>
      <div>
        {/* 버튼에 링크연결시 useNavigate hook이용 */}
        <button onClick={() => navTo("/")}>Home</button>
        <button onClick={() => navTo("/about")}>About</button>
        <button onClick={() => navTo("/contact")}>Contact</button>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
