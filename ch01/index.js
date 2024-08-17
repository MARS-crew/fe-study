// 그 언어에서 다루는 값의 범위
/**
 * 1. 원시 타입
 * string -> 문자열
 * number -> 숫자
 * boolean -> 논리값
 * undefined
 * null
 *
 * 2. 참조 타입
 * object
 */

/**
 * 변수 선언 방법
 * var
 */
var a = 10;
var b = "Hello";
var c = true;
var d = null;

console.log(a, b, c, d);

/**
 * 연산
 * - 산술 연산
 * - 비교 연산
 * - 논리 연산
 * - 대입 연산
 * - 증감 연산
 * - 문자열 연산
 */

// 더하기
console.log(1 + 3);

// 빼기
console.log(1 - 3);

// 곱하기
console.log(2 * 3);

// 나누기
console.log(10 / 3);

// 나머지
console.log(10 % 3);

// 비교 연산
console.log(10 > 3);
console.log(10 < 3);
console.log(10 >= 3);
console.log(10 <= 3);
console.log(10 == 3);
console.log(10 != 3);
console.log(10 === 3);

// 논리 연산
console.log(true && false); // and
console.log(true || false); // or
console.log(!true); // not
console.log(true ? true : false); // 3항 연산자

console.log(3 > 2 ? "참" : "거짓");

if (3 > 2) {
  console.log("참");
} else {
  console.log("거짓");
}

// 대입 연산
var a = 10;

// 증감 연산
a++;
a--;
++a;
--a;

// 문자열 연산

if (a > 3) {
  console.log("a는 3보다 크다");
} else if (a === 3) {
} else {
  console.log("a는 3보다 작다");
}

switch (a) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("default");
    break;
}
