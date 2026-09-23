/* daFafa — interações 2026 sem dependência adicional */
document.addEventListener('DOMContentLoaded', () => {
  // Fecha o menu mobile após clicar em um link.
  const nav = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.navbar-collapse a.nav-link:not(.dropdown-toggle), .navbar-collapse .dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });

  // Melhora a experiência do formulário sem fingir que existe backend.
  const form = document.querySelector('form[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = 'Mensagem preenchida. Para envio real, conecte este formulário a um serviço de formulário ou backend.';
    });
  }
});
