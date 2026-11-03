document.addEventListener('DOMContentLoaded', () => {
  // 1. Selector de Tema Claro / Oscuro
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeToggleBtn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.textContent = '☀️';
    }
  });

  // 2. Manejo del Formulario de Contacto
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    
    // Simulación de envío
    formResponse.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado exitosamente.`;
    contactForm.reset();

    setTimeout(() => {
      formResponse.textContent = '';
    }, 5000);
  });
});