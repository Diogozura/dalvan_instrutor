// Comportamento compartilhado do site (menu, ano, animação ao rolar, FAQ)

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

  // Carrossel de avaliações (Google) — setas só aparecem quando
  // houver mais de uma avaliação real cadastrada em #reviewsTrack
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewPrev = document.getElementById('reviewPrev');
  const reviewNext = document.getElementById('reviewNext');
  if (reviewsTrack && reviewPrev && reviewNext) {
    const cards = reviewsTrack.querySelectorAll('.review-card');
    let reviewIndex = 0;
    if (cards.length > 1) {
      reviewPrev.style.display = 'flex';
      reviewNext.style.display = 'flex';
      const updateReviews = () => {
        reviewsTrack.style.transition = 'transform .3s ease';
        reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
      };
      reviewPrev.addEventListener('click', () => {
        reviewIndex = (reviewIndex - 1 + cards.length) % cards.length;
        updateReviews();
      });
      reviewNext.addEventListener('click', () => {
        reviewIndex = (reviewIndex + 1) % cards.length;
        updateReviews();
      });
    }
  }

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
