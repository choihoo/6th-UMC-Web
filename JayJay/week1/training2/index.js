const closeButton = document.getElementById("closeButton");
const openButton = document.getElementById("openButton");

const modal_box = document.querySelector(".modal_box");
const modal = document.querySelector(".modal");

const body = document.querySelector("body");

closeButton.addEventListener("click", () => {
  modal_box.style.display = "none";
  body.style.backgroundColor = "";
});

openButton.addEventListener("click", () => {
  modal_box.style.display = "";
  body.style.backgroundColor = "gray";
});
