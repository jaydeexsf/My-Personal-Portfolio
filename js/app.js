// Nav sideburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

const scrollUp = document.querySelector("#scroll-up");

const navLink = document.querySelectorAll(".nav-link");

// side menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close side menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to the top of the page
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
console.log(window.top);

const up_arrow = document.querySelector('up-arrow');

if (window.top = 0) {
  up_arrow.style.backgroundColor = 'black';
}

// if(nav = 2) {
//   let ferry = document.getElementById('theferry');
// }

console.log(innerWidth);