import "../scss/style.scss";

import gsap from "gsap";

const dropdown = document.querySelector(".menu__item--dropdown");
const link = dropdown.querySelector(".menu__link");
const submenu = dropdown.querySelector(".submenu");

link.addEventListener("click", (e) => {
  e.preventDefault();

  if (dropdown.classList.contains("open")) {
    // Закрыть
    gsap.to(submenu, {
      height: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    dropdown.classList.remove("open");
  } else {
    // Открыть
    const submenuHeight = submenu.scrollHeight;

    gsap.to(submenu, {
      height: submenuHeight,
      duration: 0.3,
      ease: "power2.out",
    });
    dropdown.classList.add("open");
  }
});

// BUrger
const body = document.querySelector("body");
const menu = document.querySelector(".menu-wrapper");
const burgerBtn = document.querySelector(".burger-menu");
// const menuLinks = document.querySelectorAll(".menu__link");
burgerBtn.addEventListener("click", () => {
  const isOpen = menu.classList.contains("menu__open");

  if (!isOpen) {
    menu.classList.add("menu__open");
    burgerBtn.classList.add("active");
  } else {
    menu.classList.remove("menu__open");
    burgerBtn.classList.remove("active");
  }
});
