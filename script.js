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

 const themeToggle = document.getElementById('themeToggle');
    const body = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    });
