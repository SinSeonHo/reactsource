import { useEffect, useState } from "react";
import { getList } from "../api/bookApi";

export const useFetch = () => {
  const initState = {
    current: 0,
    dtoList: [],
    next: false,
    nextPage: 0,
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    prevPage: 0,
    totalCount: 0,
    totalPage: 0,
  };

  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getList()
      .then((result) => {
        console.log(result);

        setData(result);

        setLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return { data, loading, error };
};
