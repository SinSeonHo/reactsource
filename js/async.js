// async 와 await
// async : 함수를 비동기 함수로 작성
// await : async 함수 안에서 사용, 해당 함수가 완료될 때까지 코드 실행 일시 중지
// 구조
// async () => {
//     await 비동기메소드명();
// }

// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data = await res.json();
// console.log(data);

// async function fetchTodo() {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
// }

// const todo = await fetchTodo();
// console.log(todo);

// 비동기식 함수를 동기식처럼 작동

async function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
}

async function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());
}

const todo = await fetchTodo();
console.log(todo);
if (todo.userId == 1) {
  const user = await fetchUser();
  console.log(user);
}
