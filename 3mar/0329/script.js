$(window).scroll(function(){
  let winH = $(this).scrollTop()
  let fixH = $('#logo').height()

  console.log(fixH)
  if(fixH <= winH){
    $('nav').addClass('fix')
  }else if(fixH > winH){

    $('nav').removeClass('fix')
  }
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let contElem = $('.content')

contElem.mouseenter(function(){
  let bgdata = $(this).find('h3').attr('data-bg');
  $('section>img').attr('src', bgdata);
  //백그라운드 이미지로 했을 때
  //$('section').css({'background-image':'url('+bgdata+')'})
  contElem.removeClass('on')
  $(this).addClass('on')
})

$('.txtbox a').click(function(e){
  e.preventDefault()

  let href = $(this).attr('href');
  let winH = $(window).scrollTop()

  $('a.close').fadeIn()
  $('.detail iframe').attr('src', href);
  $('.detail').load(href);
  $('.detail').fadeIn()
  $('.detail').animate({'top': (winH + 85) + 'px'}, 500)
  
})

$('a.close').click(function(e){
  e.preventDefault()
  let winH = $(window).scrollTop()

  $(this).fadeOut()
  $('.detail').fadeOut()
  $('.detail').empty()

  $('.detail').css({'top': '200%'})
})