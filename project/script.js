
 
  const backToTop = document.createElement("button");
  backToTop.id = "back-to-top";
  backToTop.innerText = "⬆";
  document.body.appendChild(backToTop);

  
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// Animações extras para elementos que entram na tela
const cards = document.querySelectorAll('.benefit-card, .impact-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});
