(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile menu */
  const menuBtn = $('#menuBtn'), nav = $('#nav');
  const setMenu = open => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', e => e.target.closest('a') && setMenu(false));
  document.addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

  /* Live heart-rate demo (static when reduced motion) */
  const bpm = $('#bpm'), seq = [72, 74, 73, 76, 75, 72, 71];
  if (!reduce) { let i = 0; setInterval(() => { bpm.textContent = seq[++i % seq.length]; }, 1400); }

})();
