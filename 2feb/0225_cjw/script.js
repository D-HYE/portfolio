$(function(){
    var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".arrow.next",
          prevEl: ".arrow.prev",
        },
    });

    swiper.on('slideChange', function () {
        let idx = swiper.activeIndex
        $('nav li').removeClass('on')
        $('nav li').eq(idx).addClass('on')
    });

    $('nav li').click(function(e){
        e.preventDefault()
        $('nav li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        swiper.slideTo(idx, 500)
    });

    $('.navDesc').mCustomScrollbar({
        theme: "light-thin",
        autoHideScrollbar:false
    })

    var navSlide = new Swiper(".mySwiper2", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    var famous = new Swiper(".famous", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    $('.prd-box').mouseenter(function(){
        $(this).addClass('on')
        $(this).find('.info').stop().animate({'bottom':'129px'})
    }).mouseleave(function(){
        $(this).find('.info').stop().animate({'bottom':0})
        $(this).removeClass('on')
    })
    
    $('.ctrl a').mouseenter(function(){
        $(this).addClass('active')
    }).mouseleave(function(){
        $(this).removeClass('active')
    })


    tab('#tab1')
    tab('#tab2')
    function tab(tabName){
        $(`${tabName} .tabMenu a`).click(function(e){
            // 띄어쓰기 할 것!!!
            e.preventDefault();
            let href=$(this).attr('href');
    
            $(`${tabName} .tabMenu a`).removeClass('on')
            $(this).addClass('on')
            $(`${tabName} .product`).removeClass('on')
            $(href).addClass('on')
        })
    }

});