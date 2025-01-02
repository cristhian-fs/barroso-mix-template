document.addEventListener('DOMContentLoaded', () => {

  const navbarHeight = document.querySelector('.sidebar').getBoundingClientRect();

  document.documentElement.style.setProperty('--navbar-h', `${navbarHeight.height + navbarHeight.top}px`);
})