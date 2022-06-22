var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    direction: "vertical",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
swiper.on('slideChange', function () {
    let idx = swiper.activeIndex
    $('.mainSlider nav li').removeClass('on')
     $('.mainSlider nav li').eq(idx).addClass('on')
});
$('.mainSlider nav li').click(function(e){
    e.preventDefault()
    $('.mainSlider nav li').removeClass('on')
    $(this).addClass('on')
        
    let idx = $(this).index()
    swiper.slideTo(idx, 500)
})

let sw = 0;

$('#btn').on({
    mouseenter: function(){
        let click=$(this).hasClass('click')
        //click이 있는지 확인
        if(!click){
        //click이 없을 때만 한다.
            $('#btn').addClass('hover');
        }

    },
    mouseleave: function(){
        let click=$(this).hasClass('click')
        if(!click){
            $('#btn').removeClass();
        }
        //클래스 겹쳐지면 안 됨
    },
    click: function(){
        $('#btn').removeClass('hover');
        //클래스 겹쳐지면 안 됨
        sw = !sw;
        if(sw){
            $('#btn').addClass('click');
            $('.sitemap').fadeIn()
            $('.fursysInfo .desc').css({'opacity':'0'});
        }else{
            $('#btn').removeClass('click');
            $('.sitemap').fadeOut();
            $('.fursysInfo .desc').css({'opacity':'1'});
        }
    }
})