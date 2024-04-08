const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const number = document.getElementById("number");

increase.addEventListener("click", function () {
  let tmp = parseInt(number.innerText, 10);
  tmp += 1;
  number.innerText = tmp;
  console.log("increas가 클릭됨");
});

decrease.addEventListener("click", function () {
  let tmp = parseInt(number.innerText, 10);
  tmp -= 1;
  number.innerText = tmp;
  console.log("decreas가 클릭됨");
});

// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");
// const number = document.getElementById("number");

// increase.addEventListener("click", function () {
//   number += 1;
//   console.log("increas가 클릭됨");
// });

// decrease.addEventListener("click", function () {
//   number -= 1;
//   console.log("decreas가 클릭됨");
// });
