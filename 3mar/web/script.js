$('section').mousewheel(function(e, delta){
  if(delta > 0){
      let prev = $(this).prev().offset().top
      $('html').stop().animate({'scrollTop': prev})
  }else if(delta <= 0){
      let next = $(this).next().offset().top
      $('html').stop().animate({'scrollTop': next})
  }

})

$(window).scroll(function(){
  let scrTop = $(this).scrollTop();

  $('section').each(function(){
    let secTop = $(this).offset().top
    console.log(secTop)
    if(scrTop >= secTop){
        $('.wrap').removeClass('on')
        $(this).find('.wrap').addClass('on')
    }
  })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      501: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

$('.bar').click(function(){

  $('.sideNav').show();
  $('.sideNav').animate({'left': 0}, function(){
    $('.dim').fadeIn()
  })

});
$('.close').click(function(){

  $('.dim').fadeOut()
  $('.sideNav').animate({'left': '-60%'}, function(){
    $('.sideNav').hide();
  })

});