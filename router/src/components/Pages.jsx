import React, { useEffect } from "react";
import { Link, Outlet, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log("current path ", location.pathname);
  }, [location]);

  return <h1>Home Page</h1>;
}

function User() {
  // http://localhost:5173/user/1 => 해당 url에서 1 가져오기
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log("current path ", location.pathname);
  }, [location, id]);

  return <h1>User ID : {id}</h1>;
}

function Search() {
  //   // http://localhost:5173/search?keyword=test
  //   const location = useLocation();
  //   // URLSearchParams() : 브라우저 API 이용
  //   const queryParams = new URLSearchParams(location.search);
  //   const keyword = queryParams.get("keyword");

  //   useEffect(() => {
  //     console.log("current path ", location.pathname);
  //     console.log("keyword ", keyword);
  //   }, [location, keyword]);

  const [queryParams] = useSearchParams();
  const keyword = queryParams.get("keyword");

  return <h1>Search keyword : {keyword}</h1>;
}

function Articles() {
  return (
    <>
      {/* 중첩된 자식 라우트를 부모 컴포넌트 안의 특정 위치에 렌더링할 수 있게 해주는 영역 */}
      <Outlet></Outlet>
      <ul>
        <li>
          <Link to={"/articles/1"}>게시글1</Link>
        </li>
        <li>
          <Link to={"/articles/2"}>게시글2</Link>
        </li>
        <li>
          <Link to={"/articles/3"}>게시글3</Link>
        </li>
      </ul>
    </>
  );
}

function Article() {
  const { id } = useParams();
  return <h2>게시글 : {id}</h2>;
}

function Error() {
  return <h2>404 - Page Not Found</h2>;
}
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user/:id" element={<User></User>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/articles" element={<Articles></Articles>}>
          <Route path="/articles/:id" element={<Article></Article>}></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
