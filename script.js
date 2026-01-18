// Subtle hover lift effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.12}s`;
    el.classList.add("animate");
  });
});

// Auto-expand textarea
const textarea = document.querySelector(".contact-form textarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // reset height
  textarea.style.height = textarea.scrollHeight + "px"; // expand to fit content
});
