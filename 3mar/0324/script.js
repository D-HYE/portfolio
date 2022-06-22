var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        375: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    },
});