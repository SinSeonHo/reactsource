import React, { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import { getBook, putBook } from "../api/bookApi";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const EditBook = () => {
  //id 가져오기 http://localhost:5173/edit/318
  const { id } = useParams();

  const [book, setBook] = useState(null);
  // api호출 시 useEffect
  useEffect(() => {
    getBook(id).then((data) => {
      console.log("도착", data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading></Loading>;

  const onSubmit = (bookData) => {
    putBook(bookData).then((data) => {
      console.log("날짜 수정", data);
    });
  };

  return (
    <div>
      <h1 className="text-[32px]">Edit Book</h1>
      <BookForm initialData={book} onSubmit={onSubmit} />
    </div>
  );
};

export default EditBook;
