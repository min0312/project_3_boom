/* 문자열 순회 */
// let s = "토마토123";
// console.log(s);

// 문자열에서 첫번째 문자
// console.log(s[0]);
// console.log(s.charAt(0));

// 문자열 처음부터 끝까지 출력
// for (i=0; i<s.length; i++) {
//   console.log(s[i]);
// }

// ES6+ 반복
// for(let item of s) {
//   console.log(item)
// }

// 회문
// let sr = "";
// for(i=s.length-1; i>=0; i--) {
//   sr= sr+s[i]
//   console.log(sr)
// }

// if (s==sr) {
//   console.log(`${s}는 회문입니다.`)
// } else {
//   console.log(`${s}는 회문이 아닙니다.`)
// }

// 삼향연산자 => 조건식 ? 참 : 거짓
// (s == sr) ? console.log(`${s}는 회문입니다.`) : console.log(`${s}는 회문이 아닙니다.`)

// let s = "Hello 2022 JS 09!!"
// sum = 0; 
// for(let c of s) {
//   // if ( c >= '0' && c <= '9') { // 숫자문자를 확인
//   if (!isNaN(c) && c != " ") {
//     sum = sum + parseInt(c) // 문자를 숫자로 변환
//   } 
//   console.log(`${c} => ${isNaN(c)} => ${sum}`)
// }
// console.log(sum)

/* 실습 : 회문인지 판별 */
 
/* 실습 : 문자열에 포함된 숫자의 합구하기*/
 
/* 여러줄 문자열 저장 */
let s = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`
console.log(s)

console.log("개수 :", s.match(/HTML/g)?.length);

let pos = 0;
let cnt = 0;

s.includes("HTML"); // 있으면 True, 없으면 False 값
pos = s.indexOf("HTML2") // 있으면 위치값, 없으면 -1
console.log(pos);

while(true) {
  if (s.includes("HTML", pos)) {
    if(s.indexOf("HTML") == -1) break;

    pos = s.indexOf("HTML") + 1;
    // 문자열 슬라이싱
    s = s.slice(pos);
    cnt++ ;
  } 
  else break;
} 
console.log(cnt);

 
/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인*/
 

/* 문자열 슬라이싱*/
 
