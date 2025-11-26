/* ============================
   MOBILE NAV TOGGLE
============================ */
const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
}

/* ============================
   ACTIVE NAV LINK ON SCROLL
============================ */
const sections = document.querySelectorAll("section[id]");

function handleScrollActiveLink() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let currentId = "";

  sections.forEach(section => {
    const offsetTop = section.offsetTop - 130; // header height + margin
    if (scrollY >= offsetTop) currentId = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href") || "";
    if (currentId && href.includes(`#${currentId}`)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScrollActiveLink);

/* ============================
   THEME TOGGLE (DARK / LIGHT)
============================ */
const themeToggle = document.getElementById("theme-toggle");
const THEME_KEY = "theme";

function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector("i");
  if (!icon) return;

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

applyStoredTheme();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      localStorage.setItem(THEME_KEY, "light");
    }
    updateThemeIcon();
  });
}

/* ============================
   CONTACT FORM (FRONTEND ONLY)
============================ */
const fakeSubmit = document.getElementById("fake-submit");

if (fakeSubmit) {
  fakeSubmit.addEventListener("click", () => {
    alert("This is a frontend-only form. Use email or LinkedIn to contact.");
  });
}

/* ============================
   FOOTER YEAR
============================ */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
