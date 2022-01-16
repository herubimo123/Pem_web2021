const buy = document.getElementById("buy");
const buy1 = document.getElementById("buy1");
const tutup = document.getElementById("tutup");
const modal_container = document.getElementById("modal_container");

buy.addEventListener("click", () => {
  modal_container.classList.add("show");
});

buy1.addEventListener("click", () => {
  modal_container.classList.add("show");
});

tutup.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
