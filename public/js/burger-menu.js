let burgerIcon = document.querySelector('.header__button_burger');
let burgerMenu = document.querySelector('.header__nav');
let burgerOverlay = document.querySelector('.header__menu-overlay');

console.log(burgerIcon);
console.log(burgerMenu);
console.log(burgerOverlay);

burgerIcon.addEventListener('click', function() {
    burgerMenu.classList.toggle('header__display-block');
    burgerOverlay.classList.toggle('header__display-block');
});