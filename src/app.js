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

// fetch data and inject into list

//create courses modal
//content
var modalBtnCcg = document.querySelector("#create-ccg-button");
var modalBgCcg = document.querySelector(".modal-ccg");
var closeBtnCcg = document.querySelector(".close-modal-ccg");

modalBtnCcg.addEventListener("click", function () {
  modalBgCcg.classList.add("bg-active");
});

closeBtnCcg.addEventListener("click", function () {
  modalBgCcg.classList.remove("bg-active");
});

// create student group modal
//content
var modalBtnCsg = document.querySelector("#create-Student-button");
var modalBgCsg = document.querySelector(".modal-csg");
var closeBtnCsg = document.querySelector(".close-modal-csg");

modalBtnCsg.addEventListener("click", function () {
  modalBgCsg.classList.add("bg-active");
});

closeBtnCsg.addEventListener("click", function () {
  modalBgCsg.classList.remove("bg-active");
});
