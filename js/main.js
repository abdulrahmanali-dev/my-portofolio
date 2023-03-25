let navbar = document.querySelector(".navbar");
let hero = document.querySelector(".hero ");
// When Scrolling
window.onscroll = () => {
  // Check if We Scroll To  The more homes Sectiom
  if (window.pageYOffset >= hero.offsetTop) {
    navbar.classList.add("sticky");
    // navbar.classList.add("navbar-dark");
    // navbar.classList.remove("navbar-light");
  } else {
    navbar.classList.remove("sticky");
    // navbar.classList.add("navbar-light");
    // navbar.classList.remove("navbar-dark");
    // navbar.classList.remove("navbar-light");
  }
};

let navLinks = document.querySelectorAll(".nav-link");
scrollTo(navLinks);

function scrollTo(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
