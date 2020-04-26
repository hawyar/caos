// modal content
var modalBtn = document.querySelector("#create-button");
var modalBg = document.querySelector(".modal-bg");
var closeBtn = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

closeBtn.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

// caos table content
