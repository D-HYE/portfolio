var swiper = new Swiper(".mySwiperV", {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween:0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
     },
});
var swiper2 = new Swiper(".mySwiperH", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var effect = new Swiper(".effectSwiper", {
    effect: "coverflow",
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    },
});
var grid = new Swiper(".gridSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    grid: {
        rows: 2,
    },
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});