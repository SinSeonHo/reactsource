// 동기식 : 요청 후 응답이 올때까지 기다림
// 비동기식 : 요청 후 응답과 무관하게 다른작업진행가능

// 콜백함수 : 나중에 호출되는 함수
// fetch().then().then().catch();

// 콜백지옥 : 비동기식 콜백함수를 동기식으로 처리하려다보니 코드가 복잡해지는현상

// console.log("start");
// setTimeout(() => {
//   console.log("2초가 지났습니다");
// }, 2000);
// console.log("end");

// ajax 예전방식(jQuery 이용)
// function getData(callbackFunc) {
//   let result;

//   $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
//     // result = res;
//     callbackFunc(res);
//   });
//   return result;
// }

// getData((data) => console.log(data));
// // console.log(getData());

// ajax -> fetch 함수
function getData1(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}

function getData2(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}

getData1((data) => {
  console.log(data);
  getData2((data) => console.log(data));
});
