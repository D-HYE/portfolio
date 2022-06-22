let wd = $(this).width()
let sw = 0

if(wd > 500){
    $('.info a').click(function(){
        sw = 1
        $('.info a').removeClass('active')
        $(this).addClass('active')
        $('.gnb').addClass('on')
        $('.gnbWrap').stop().animate({'left':0})
        if(sw){
            $('.barWrap').click(function(){
                $('.gnb').removeClass('on')
                $('.gnbWrap').stop().animate({'left':'-351px'})
                $('.info a').removeClass('active')
                sw = 0
            });
        }
    });

    $('.barWrap').click(function(){
        sw = !sw //왜 다른 버튼 눌렀다가 다시 누르면 안 되는 걸까?

        if(sw){
            $('.gnb').addClass('on')

        }else{
            $('.gnb').removeClass('on')
            $('.gnbWrap').stop().animate({'left':'-351px'})
        }
    });

    

}else if(wd <= 500){
    $('.info a').click(function(){
        sw = 1
        $('.info a').removeClass('active')
        $(this).addClass('active')
        $('.page-content').stop().slideDown()

        if(sw){
            $('.barWrap').click(function(){
                $('.gnb').removeClass('on')
                $('.page-content').stop().slideUp()
                $('.info a').removeClass('active')
                sw = 0
            });
        }
    })
    $('.barWrap').click(function(){
        $('.page-content').stop().slideToggle()
        sw = !sw
        if(sw){
            $('.info a:first').addClass('active')
        }else{
            $('.info a').removeClass('active')
        }
    });
}

$(window).resize(function(){

    if(wd > 500){
        $('.gnbWrap').animate({'left':'-351px'})
        
    }else if(wd <= 500){
        $('.gnbWrap').animate({'left':'0'})
    
    }
});