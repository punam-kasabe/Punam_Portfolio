// script.js

// 3D Portfolio Carousel Animation
let cardIndex = 0;
setInterval(() => {
  const cards = document.querySelectorAll('.carousel-card');
  cards.forEach(card => card.classList.remove('active'));
  cardIndex = (cardIndex + 1) % cards.length;
  cards[cardIndex].classList.add('active');
}, 3000);

// Slide-in animation on scroll
const animatedSections = document.querySelectorAll('.slide-in, .fade-in');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animatedSections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
