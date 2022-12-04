// Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-lg-4");
    navbar.classList.add("bgBrand");
  } else {
    navbar.classList.add("py-lg-4");
    navbar.classList.remove("bgBrand");
  }
});
