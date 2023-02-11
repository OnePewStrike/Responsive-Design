// // Carousel Module
// const carousel = document.querySelector('.carousel');

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e) => {
//   // updating global variables value on mouse down event
//   isDragStart = true;
//   prevPageX = e.pageX
//   prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//   // scrolling images/carousel on left according to mouse pointer
//   if(!isDragStart) return;
//   e.preventDefault();
//   let positionDiff = e.pageX - prevPageX;
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//   isDragStart = false;
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop)


// Navbar Module
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-xmark');
  navbar.classList.toggle('open');
}