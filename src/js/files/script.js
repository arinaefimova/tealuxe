// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuCloseBtn = document.querySelector('.menu__close-btn');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu-close');
menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('menu__list_open');
    menuShadow.classList.toggle('menu-open');
    menuCloseBtn.classList.add('_active');
    document.body.classList.toggle('_lock');
});
menuClose.addEventListener('click', function () {
    menuList.classList.remove('menu__list_open');
    menuCloseBtn.classList.remove('_active')
    document.body.classList.remove('_lock');
    menuShadow.classList.remove('menu-open');
});
