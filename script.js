const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const revealElements = document.querySelectorAll(".reveal");

const applyTheme = (theme) => {
  const isLight = theme === "light";

  document.body.classList.toggle("light-mode", isLight);
  themeToggle.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i><span>Modo</span>'
    : '<i class="fa-solid fa-moon"></i><span>Modo</span>';
};

applyTheme(localStorage.getItem("preferred-theme") || "dark");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";

  localStorage.setItem("preferred-theme", nextTheme);
  applyTheme(nextTheme);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
