// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Error from "./components/Error";
import Home from "./pages/Home";

// http://localhost:5173/ => Home 보여주기
// http://localhost:5173/add => AddBook 보여주기
// http://localhost:5173/edit/1 => EditBook 보여주기
// http://localhost:5173/books/1 => BookDetails 보여주기
// 잘못된경로 => Error 보여주기

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
