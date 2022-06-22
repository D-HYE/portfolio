$(function(){
    $('li.navMain').mouseenter(function(){
        $(this).find('.subWrap').stop().slideDown();
        $('.navBg').stop().slideDown();
    }).mouseleave(function(){
        $(this).find('.subWrap').hide();
        $('.navBg').stop().slideUp();
    });

    $('li.type').mouseenter(function(){
        $('.brandNav').stop().animate({right : 0})
        $(this).find('a').addClass('click')
        $(this).find('.brand').show();
    }).mouseleave(function(){
        $('.brandNav').stop().animate({right : -100})
        $(this).find('a').removeClass('click')
        $(this).find('.brand').hide();
    })

    $('.lbtn').click(function(){
        $('.slideWrap').animate({marginLeft: -200+'vw'}, function(){
            $('.slide').eq(0).appendTo('.slideWrap');
            $('.slideWrap').css({marginLeft: -100+'vw'});
        });
    })
    $('.rbtn').click(function(){
        $('.slideWrap').animate({marginLeft: 0}, function(){
            $('.slide:last').prependTo('.slideWrap');
            $('.slideWrap').css({marginLeft: -100+'vw'});
        });
    })

    let rolling = setInterval(function(){
        $('.lbtn').click();
    }, 3000);

    $('.slideFrame').mouseenter(function(){
        clearInterval(rolling);
    }).mouseleave(function(){
        rolling = setInterval(function(){
            $('.lbtn').click();
        }, 3000);
    });

    $('li.contents').mouseenter(function(){
        $(this).find('a').addClass('hover');
    }).mouseleave(function(){
        $(this).find('a').removeClass('hover');
    });

});