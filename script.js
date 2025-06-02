//  =================   Navigation Toggle  =================
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const header = document.querySelector("header");

  /* -----  Toggle mobile menu  ----- */
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  /* -----  Highlight current section in nav  ----- */
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    sections.forEach((sec) => {
      const offsetTop = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (currentScroll >= offsetTop && currentScroll < offsetTop + height) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
        activeLink?.classList.add("active");
      }
    });

    /* -----  Header sticky effect  ----- */
    header.classList.toggle("sticky", currentScroll > 100);
  });

  /* -----  Close mobile nav on link click  ----- */
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    })
  );
});

//  =================   ScrollReveal Animations  =================
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p", { origin: "right" });