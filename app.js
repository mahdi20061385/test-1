let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.left = "-16rem";
    menuBtnIcon.classList = "fa fa-bars";
  }
});
let hamBtn = document.querySelector(".hamber__icon");
let hamBtnIcon = document.querySelector(".hamber__icon i");
hamBtn.addEventListener("click", function () {
  menu.style.left = "-16rem";
  menuBtnIcon.classList = "fa fa-bars";
});
