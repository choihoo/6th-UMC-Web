const number = document.getElementById("number"); // 숫자를 표시하는 요소
const increase = document.getElementById("increase"); // 증가 버튼
const decrease = document.getElementById("decrease"); // 감소 버튼

console.log(number);
console.log(increase);
console.log(decrease);
//innerText가 핵심
let numberValue = Number(number.innerText);

increase.addEventListener("click", () => {
  numberValue += 1;
  //innerText를 해서 값 업데이트 해줘야함
  number.innerText = numberValue;
  console.log("increase가 클릭 됨");
});

// 감소 버튼 클릭 이벤트
decrease.addEventListener("click", () => {
  numberValue -= 1;
  number.innerText = numberValue;
  console.log("decrease가 클릭 됨");
});
