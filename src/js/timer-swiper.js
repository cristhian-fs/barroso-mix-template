import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', () =>{
  const timerSwiper = new Swiper(".timer-swiper", {
    slidesPerView: 3,
    centeredSlides: !0,
    a11y: {
      prevSlideMessage: 'Opção de timer anterior',
      nextSlideMessage: 'Próxima opção de timer',
      containerMessage: 'Defina a quantidade de minutos do timer'
    }
  })
})