const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.textContent = "☰";
    });
  });
}

// Scroll animáció
const revealElements = document.querySelectorAll(
  ".glass, .program, .feature, .simple-card, .timeline-item"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// Aktív menüpont scroll alapján
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
});

// Kis extra: print gomb animáció kattintásnál
const printBtn = document.querySelector(".print-btn");

if (printBtn) {
  printBtn.addEventListener("click", () => {
    printBtn.style.transform = "scale(0.9)";

    setTimeout(() => {
      printBtn.style.transform = "";
    }, 150);
  });
}

// Logo fallback
const logoImg = document.querySelector(".brand-logo img");

if (logoImg) {
  logoImg.addEventListener("error", () => {
    logoImg.style.display = "none";

    const fallback = logoImg.nextElementSibling;
    if (fallback) {
      fallback.style.display = "block";
    }
  });
}
