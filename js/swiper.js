// const progressCircle = document.querySelector('.autoplay-progress svg');
// const progressContent = document.querySelector('.autoplay-progress span');
var swiper = new Swiper('.mySwiper', {
  //   spaceBetween: 30,
  //   centeredSlides: true,
  parallax: true,
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
