// 매개변수(parameter) 작성 점검

// * 1개의 매개변수
// 이름별 인사말을 출력하는 함수 정의
function greet(name) {
  console.log(`안녕하세요, ${name}님!`);
}

// * 2개의 매개변수
// 두 수를 더하는 함수 정의
function add(a, b) {
  return a + b;
}

// * 3개의 매개변수
// 세 수 중에서 가장 큰 수를 찾는 함수 정의
function findMax(a, b, c) {
  let max = a; // 첫 번째 수를 최대값으로 가정

  if (b > max) {
    max = b; // 두 번째 수가 최대값보다 크면 최대값을 두 번째 수로 변경
  }

  if (c > max) {
    max = c; // 세 번째 수가 최대값보다 크면 최대값을 세 번째 수로 변경
  }

  return max; // 최대값 반환
}

console.log(findMax(3, 6, 9)); // 9
console.log(findMax(9, 3, 6)); // 9