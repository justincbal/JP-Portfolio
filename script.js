// Hamburger -> Menu -> Close Hamburger -> Onclick item or exit -> Close menu -> Display ham
const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const exit = document.querySelector(".exit");
const navItem = document.querySelectorAll(".nav-item");

hamburgerMenu.addEventListener("click", () => {
  nav.style.display = "flex";
  hamburgerMenu.style.display = "none";
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    nav.style.display = "none";
    hamburgerMenu.style.display = "grid";
  });
});
