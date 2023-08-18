//Navbar background on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) header.classList.add('header_scroll');
  else header.classList.remove('header_scroll');
});

//Hamburger menu
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu__toggle-btn');

menu.addEventListener('click', () => {
  menuToggle.classList.toggle('menu__toggle-btn_active');
  menu.classList.toggle('menu_active');
});

//Carousel
let activeSlide = 0;
const slidesAmount = document.querySelectorAll('.slider__slide').length;
const rightBtn = document.querySelector('.slider__btn_right');
const leftBtn = document.querySelector('.slider__btn_left');
const slidesContainer = document.querySelector('.slider__slides-container');

rightBtn.addEventListener('click', () => {
  clearInterval(autoplay);
  changeSlide('right');
});
leftBtn.addEventListener('click', () => {
  clearInterval(autoplay);
  changeSlide('left');
});

function changeSlide(direction) {
  if (direction === 'right') {
    activeSlide === slidesAmount - 1 ? (activeSlide = 0) : (activeSlide += 1);
  } else {
    activeSlide === 0 ? (activeSlide = slidesAmount - 1) : (activeSlide -= 1);
  }
  slidesContainer.style.marginLeft = `-${activeSlide * 100}%`;
}

const autoplay = setInterval(() => {
  changeSlide('right');
}, 8000);
