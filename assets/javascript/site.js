// NavBar
const navBar = document.querySelector(".nav");
const menu = document.querySelector("#menu-btn")

menu.onclick = () => {
  navBar.classList.toggle('active');
}


window.onscroll = () => {
  navBar.classList.remove('active');
}