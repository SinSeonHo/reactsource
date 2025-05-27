// 콜백지옥을 해결하기위함
// 1) promise
// 2) async, await

// promise 상태
// 1.대기(pending) 2.이행(fulfilled) 3.실패 (rejected)

// 대기상태
// new Promise();

// new Promise((resolve, reject) => {
// 이행상태 (비동기 처리 완료되어 promise가 값을 반환해준 상태)
//   resolve();

// 실패상태 (비동기 처리 실패)
//   reject(new Error("에러발생"));
// });

function test() {
  const p1 = new Promise((resolve, reject) => {
    console.log("hello");
    setTimeout(() => {
      resolve(console.log("2초가 지났습니다"));
    }, 2000);
  })
    .then(() => console.log("Bye"))
    .catch((res) => console.log("error" + res));

  console.log("Hello Again");

  console.log(p1);
}

test();

function getData1() {
  return new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
      if (res) {
        resolve(res);
      }
      reject(new Error("에러"));
    });
  });
}

getData1()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
