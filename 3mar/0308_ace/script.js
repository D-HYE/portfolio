$('.textSlide').eq(0).animate({'opacity': 1});
$('.scienceMenu li').click(function(){
    $('.scienceMenu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index();
    $('.hSlideWrap').animate({'margin-left': -idx*100+'%'}, 800)
//let ht = $('vSlideWrap .textSlide').outerHeight();

    
    $('.textSlide').animate({'margin-top':'-100px', 'opacity': 0}, 800, function(){
        $('.textSlide').css({'margin-top': '100px'})
        $('.textSlide').eq(idx).stop().animate({'margin-top':'0', 'opacity': 1}, 800)
    })
});
$('#tap1').show()
$('.tap a').click(function(e){
    e.preventDefault()
    $('.tap a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')
    $('.swiper').fadeOut();
    $(href).fadeIn();
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
});
