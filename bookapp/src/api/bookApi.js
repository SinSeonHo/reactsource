// 기본URL
import axios from "axios";
export const API_SERVER_HOST = "http://localhost:8080/api/books";

// 전체조회
export const getList = async (pageParam) => {
  // pageParam 정보를 useFetch로부터 받아와서 서버로 보내야 함
  const { page, size, genre, keyword } = pageParam;
  const res = await axios.get(API_SERVER_HOST, { params: { page: page, size: size, genre: genre, keyword: keyword } });
  return res.data;
};

// 하나조회
export const getBook = async (id) => {
  const res = await axios.get(`${API_SERVER_HOST}/${id}`);
  return res.data;
};

// 입력
export const postBook = async (bookObj) => {
  console.log(bookObj);
  const res = await axios.post(`${API_SERVER_HOST}/add`, bookObj);
  return res.data;
};

// 대여가능여부수정
export const putAvailableBook = async (bookObj) => {
  console.log(bookObj);
  const res = await axios.put(`${API_SERVER_HOST}/${bookObj.id}`, bookObj);
  return res.data;
};

// 날짜수정
export const putBook = async (bookObj) => {
  console.log(bookObj);
  const res = await axios.put(`${API_SERVER_HOST}/edit/${bookObj.id}`, bookObj);
  return res.data;
};

// 삭제
export const removeBook = async (id) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return res.data;
};
