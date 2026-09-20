// Comportamento compartilhado do site (menu, ano, animação ao rolar, FAQ)

// Remove "index.html" da barra de endereço (ex: /index.html#jornada -> /#jornada)
if (/\/index\.html$/i.test(window.location.pathname)) {
  const url = window.location.pathname.replace(/index\.html$/i, '') + window.location.search + window.location.hash;
  window.history.replaceState(null, '', url);
}

document.addEventListener('DOMContentLoaded', () => {
  // Ano automático no rodapé
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // FAQ accordion (se existir na página)
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Animação leve ao rolar a página (progressive enhancement:
  // o conteúdo já nasce visível via CSS, então nada quebra se o JS falhar)
  document.documentElement.classList.add('js-ready');
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }
});
