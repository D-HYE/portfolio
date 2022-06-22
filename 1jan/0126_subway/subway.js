$(function(){
    //메뉴
    $('.mainNav').mouseenter(function(){
        $('.subNav').stop().slideDown();
        $('.bg').stop().slideDown();
    }).mouseleave(function(){
        $('.subNav').stop().slideUp();
        $('.bg').stop().slideUp();
    });

    //슬라이드


    $('.lbtn').click(function(){
        $('.slideWrap').animate({marginLeft: -200 +'%'}, function(){
            $('.slide').eq(0).appendTo('.slideWrap')
            $('.slideWrap').css({marginLeft: -100 + '%'})
        });
    })
    $('.rbtn').click(function(){

        $('.slideWrap').animate({marginLeft: 0}, function(){
            $('.slide:last').prependTo('.slideWrap');
            $('.slideWrap').css({marginLeft: -100+'%'})
        });
    })


    //탭
    $('.tabCont').hide();
    $('.tabCont').eq(0).show();

    $('.tabMenu a').click(function(e){
        e.preventDefault()
        let tbClick = $(this).attr('href');
        
        $('.tabMenu a').removeClass('click');
        $(this).addClass('click');

        $('.tabCont').hide();
        $(tbClick).fadeIn();
    })

})