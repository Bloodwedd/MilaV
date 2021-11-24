// Nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const social = document.querySelector("#social-btn");
const links = document.querySelector("#social-nav");
// Select nav links
const navLink = document.querySelectorAll(".nav-link");
// Open navbar
burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  burger.classList.toggle("active");
});
// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    burger.classList.remove("active");
  })
);
// Close menu click outside navbar
document.onclick = function(e){
  if(e.target.id != 'navbar' && e.target.id != 'burger-menu')
  {
    nav.classList.remove("show");
    burger.classList.remove("active");
  }
}
// Display Social links
social.addEventListener("click", () => {
  links.classList.toggle("paw");
});
