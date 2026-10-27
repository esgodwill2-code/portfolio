const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for your message! I will get back to you soon.");
});
