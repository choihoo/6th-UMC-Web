const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.querySelector(".modalbox");

openBtn.addEventListener("click", () => {
  modal.style.display = "block"; 
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; 
});