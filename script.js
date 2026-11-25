const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
const topButton = document.getElementById('topButton');
const year = document.getElementById('year');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  menuToggle.textContent = navList.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});

window.addEventListener('scroll', () => {
  topButton.classList.toggle('show', window.scrollY > 400);
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

year.textContent = new Date().getFullYear();
