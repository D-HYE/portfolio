
$('nav .mainNav').mouseenter(function(){
  $(this).find('.subNav').stop().fadeIn(200)
  $(this).find('.subNav').addClass('on')
}).mouseleave(function(){
  $(this).find('.subNav').hide()
  $(this).find('.subNav').removeClass('on')
})

var swiper1 = new Swiper(".headSlide", {
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper1.on('slideChange', function () {
  let idx = swiper1.activeIndex


  $('#mainBg').removeClass()
  $('#subBg').removeClass()
  $('#mainBg').addClass('mainbg' + idx)
  $('#subBg').addClass('subbg' + idx)
})

var swiper2 = new Swiper(".frame", {
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".bannerswiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});