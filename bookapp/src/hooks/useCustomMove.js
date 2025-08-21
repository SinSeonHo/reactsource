// 페이지나누기 이동

import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) return defaultValue;
  return parseInt(param);
};

const useCustomMove = () => {
  const [refresh, setRefresh] = useState(false);

  // useNavigate는 <Link to={{}}/> 와 같은 역할
  const navigate = useNavigate();

  // 쿼리스트링 가져오기
  const [queryParams] = useSearchParams();

  // ?page=1&size=10&genre=&keyword= 가져오기
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const genre = getNum(queryParams.get("genre"), 0);
  const keyword = queryParams.get("keyword") || "";

  const queryDefault = createSearchParams({ page, size, genre, keyword }).toString();

  // 페이지 이동 수단 2가지
  // 1. ?page=1&size=&genre=&keyword
  // 2. moveToList 직접 호출 moveToList({page:1, size:20, genre:1, keyword:'java'})

  const moveToList = (pageParam) => {
    let queryStr = "";

    if (pageParam) {
      // moveToList는 객체로 들어오기때문에 get 사용x
      const page = getNum(pageParam.page, 1);
      const size = getNum(pageParam.size, 10);
      const genre = getNum(pageParam.genre, 0);
      const keyword = pageParam.keyword || "";
      queryStr = createSearchParams({ page, size, genre, keyword }).toString();
    } else {
      queryStr = queryDefault;
    }

    setRefresh(!refresh);

    navigate({
      pathname: `/`,
      search: queryStr,
    });
  };

  const moveToDetail = (id) => {
    navigate({
      pathname: `/books/${id}`,
      search: queryDefault,
    });
  };

  const moveToEdit = (id) => {
    navigate({
      pathname: `/edit/${id}`,
      search: queryDefault,
    });
  };

  return { moveToList, moveToDetail, moveToEdit, page, size, genre, keyword, refresh };
};

export default useCustomMove;
