// 1. 함수의 선언과 호출
// 함수 선언
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// 함수 호출
greet('Ho Nyeong'); // Hello, Ho Nyeong!

// 2. 익명함수의 선언과 호출
// 익명함수 선언
const add = function (a, b) {
  return a + b;
};
// 익명함수 호출
add(3, 5);
const result = add(3, 5);
console.log(result); // 8