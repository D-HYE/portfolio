var swiper = new Swiper(".mb_header", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

var swiper2 = new Swiper(".main_slide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper3 = new Swiper(".brand_slide", {
    effect: "fade",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

swiper3.on('slideChange', function(){
    let idx = swiper3.activeIndex
    let listIdx = $('.onOff li').eq(idx)
    
    $('.onOff li').each(function(){
        toggle(this, '_on', '_off')
    })

    toggle(listIdx, '_off', '_on')


})

$('.onOff li').on({
    mouseenter : function(){
        toggle(this, '_off', '_on')
    },
    mouseleave : function(){
        toggle(this, '_on', '_off')
    },
    click : function(){
        let idx = $(this).index()
        swiper3.slideTo(idx)
    }
})

function toggle(imgElem, obj1, obj2){
    let thisImg = $(imgElem).find('img').attr('src')
    let toggleImg = thisImg.replace(obj1, obj2);

    $(imgElem).find('img').attr('src', toggleImg)
}

$(window).on('scroll', function(){
    let scrT = $(this).scrollTop()
    let rotateT = $('.story2').offset().top
    let stopT = $('#sect3').offset().top
    if(scrT >= rotateT && scrT <= stopT){
        $('.rotateImg').delay(1000).animate({'rotate' : '+=30deg'}, 500, 'linear')
    }

    $('#sect3 article').each(function(i){
        let artT = $(this).offset().top

        if(scrT >= artT){
            $(this).find('li').each(function(index){
                $(this).stop().animate({'top': 0, 'opacity': 1}, index*100)
            })
            $('.menuList a').removeClass('on')
            $('.menuList li').eq(i).find('a').addClass('on')
        }
    })

    let menuT = $('.menuList').offset().top
    if(scrT >= menuT - 10){
        $('.menuList ul').addClass('fix')
    }else{
        $('.menuList ul').removeClass('fix')
    }
})