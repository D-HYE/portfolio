$('.mainNav').mouseenter(function(){
   $('header').stop().animate({'height':'280px'})
})
$('nav').mouseleave(function(){
    $('header').stop().animate({'height':'70px'})
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.menu_list li').on({
      mouseenter:function(){
          let idx = $(this).index();
          $('.slide_img_wrap').stop().animate({'marginLeft': -100 * idx + '%'}, 700)

          $('.viewBtn').removeClass('on')
          $(this).find('.viewBtn').addClass('on')
      },
  })

  $('.content').load('item1.html')
  $('.page').click(function(e){
    e.preventDefault()
    let href = $(this).attr('href')
    $('.content').load(href)
  })

