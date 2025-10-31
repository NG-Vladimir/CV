// Плавное появление блоков
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Градиент в Hero
const hero = document.querySelector(".hero-bg");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  hero.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
});

// Скролл к контактам
document.getElementById("contact-btn").addEventListener("click", () => {
  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
});

// Раскрытие карточек опыта и поворот стрелки
function toggleExpand(card) {
  const expandable = card.querySelector(".expandable");
  const arrow = card.querySelector(".arrow");
  expandable.classList.toggle("expanded");
  arrow.classList.toggle("rotated");
}