// 기본URL
import axios from "axios";
export const API_SERVER_HOST = "http://localhost:8080/api/books";

// 전체조회
export const getList = async () => {
  const res = await axios.get(API_SERVER_HOST);
  return res.data;
};

// 하나조회
export const getBook = () => {};

// 입력
export const postBook = () => {};

// 수정
export const putBook = () => {};

// 삭제
export const removeBook = () => {};
