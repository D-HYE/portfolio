$('header a').click(function(e){
    e.preventDefault();
    let href = $(this).attr('href')
    let secTop = $(href).offset().top

    $('html').stop().animate({'scrollTop': secTop}, 800)
})

$(window).scroll(function(){
    let scrTop = $(this).scrollTop();
    let winH = $(this).height()
    console.log(winH);

/*  

for문 사용하는 법~!인데 나는 이렇게 안 만들어서 못 씀ㅎ
    for(i = 0; i < 6; i++){
        if(scrTop >= winH*i && scrTop < winH*(i+1)){
            $('nav li').removeClass('on');
            $('nav li').eq(i).addClass('on');
        }
    }

*/  
    $('section').each(function(i){
        let secTop = $(this).offset().top

        if(scrTop >= secTop){
           /* $('nav li').removeClass('on');
            $('nav li').eq(i).addClass('on');*/
            $('header').removeClass()
            $('header').addClass('bg' + i)
            $('.txtbox').removeClass('on')
            $(this).find('.txtbox').addClass('on')
        }
    })

    if(scrTop >= winH*0 && scrTop < winH*1){
        $('nav li').removeClass('on');
    }
    if(scrTop >= winH*1 && scrTop < winH*4){
        $('nav li').removeClass('on');
        $('nav li').eq(0).addClass('on');
    }
    if(scrTop >= winH*4 && scrTop < winH*5){
        $('nav li').removeClass('on');
        $('nav li').eq(1).addClass('on');
    }
    if(scrTop >= winH*5 && scrTop < winH*6){
        $('nav li').removeClass('on');
        $('nav li').eq(2).addClass('on');
    }


});

$('section').mousewheel(function(e, delta){
    if(delta > 0){
        let prev = $(this).prev().offset().top
        $('html').stop().animate({'scrollTop': prev})
    }else if(delta <= 0){
        let next = $(this).next().offset().top
        $('html').stop().animate({'scrollTop': next})
    }

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });