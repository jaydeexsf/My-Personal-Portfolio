// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scrolling to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const Image = document.querySelector('.project-pic');

Image.addEventListener("hover", () => {
  setInterval(() => {
    for (let i = 0; i < 5 ; i++) {
      Image.src = `./images/screenshot${i}OfStudentRoomsWebSite.png`;
      Image.style.transition = "all 2.3s linear";
      }
    }), 1000
  })
  

Image.addEventListener("onchange", () => {
  Image.src = "screenshot0OfStudentRoomsWebSite"
})
console.log(window.innerWidth);

const up_arrow = document.querySelector('up-arrow');

if (window.top = 0) {
  up_arrow.style.backgroundColor = 'black';
}