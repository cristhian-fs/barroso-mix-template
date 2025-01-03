function initNavbar() {
  const sidebarNavButtons = document.querySelectorAll('.sidebar_navigation_item, .sidebar_social_link');
  const sidebarWrapper = document.querySelector('.sidebar_navigation_wrapper');
  const burgerMenuBtn = document.querySelector('.burger input');
  const sidebarClose = document.querySelector('.sidebar_close');
  let isOpen = false;

  function openSidebar() {
    sidebarWrapper.setAttribute('data-state', 'open');
    isOpen = true;
  }

  function closeSidebar() {
    sidebarWrapper.setAttribute('data-state', 'closed');
    isOpen = false;
    burgerMenuBtn.checked = false;
  }

  burgerMenuBtn.addEventListener('click', openSidebar);

  sidebarNavButtons.forEach(btn => {
    btn.addEventListener('click', closeSidebar);
  });

  document.addEventListener('click', e => {
    if (e.target.closest('.sidebar_overlay') && isOpen) {
      closeSidebar();
    }
  });
}

function setNavbarHeightStyle(){
  const navbarHeight = document.querySelector('.sidebar').getBoundingClientRect();
  document.documentElement.style.setProperty('--navbar-h', `${navbarHeight.height + navbarHeight.top}px`);
}

function getFooterHeight(){
  
  const footerHeight = document.querySelector('.music_player').getBoundingClientRect().height;

  return document.documentElement.style.setProperty('--footer-h', `${footerHeight}px`);
}

document.addEventListener('DOMContentLoaded', () => {

  setNavbarHeightStyle();
  initNavbar();
  getFooterHeight();
});