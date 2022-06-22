$('nav li').mouseenter(function(){
    $(this).find('img.on').show();
    $(this).find('img.off').hide();
}).mouseleave(function(){
    $(this).find('img.off').show();
    $(this).find('img.on').hide();
})


$('button.rbtn').click(function(){

    $('.slidewrapB').animate({'marginTop':'-1000px'}, function(){
        $('.slidewrapB .slide').eq(0).appendTo('.slidewrapB')
        $('.slidewrapB').css({'marginTop': '-500px'})
    })
    $('.slidewrapT').animate({'marginLeft':'-200%'}, function(){
        $('.slidewrapT .slide').eq(0).appendTo('.slidewrapT')
        $('.slidewrapT').css({'marginLeft': '-100%'})
    })
})

$('button.lbtn').click(function(){
    $('.slidewrapB').animate({'marginTop':'0'}, function(){
        $('.slidewrapB .slide').eq(3).prependTo('.slidewrapB')
        $('.slidewrapB').css({'marginTop': '-500px'})
    })
    $('.slidewrapT').animate({'marginLeft':'0'}, function(){
        $('.slidewrapT .slide').eq(3).prependTo('.slidewrapT')
        $('.slidewrapT').css({'marginLeft': '-100%'})
    })
})

let set;

function rotate(){
     $('.leaf').find('img').animate({rotate : '+=3deg'}, 100, 'linear');
}

set = setInterval(rotate, 100)

$('.leaf').mouseenter(function(){
    clearInterval(set);
    $(this).css({'opacity':1})
    
}).mouseleave(function(){
    set = setInterval(rotate, 100);
    $(this).css({'opacity':0.5})
});


$('.leaf').click(function(e){
    e.preventDefault()

    let idxCurr = $(this).parents('.slide').index();
    let href = $(this).attr('href')
    $('.placeT .slide').eq(idxCurr).find('img').attr('src', href)
    $(this).parents('.slide').find('div').removeClass('on')
    $(this).parents('.slide').find('.default').addClass('on')
    $(this).find('span').css({'display':'none'})
})

$('.list li').click(function(e){
    e.preventDefault()

    let idx = $(this).index();
    let idxCurr = $(this).parents('.slide').index();
    let href = $(this).find('a').attr('href')
    $('.placeT .slide').eq(idxCurr).find('img').attr('src', href)
    $(this).parents('.slide').find('.content>div').removeClass('on')

    $(this).parents('.slide').find('.content .desc').eq(idx).addClass('on')

    $(this).parents('.slide').find('.leaf span').css({'display':'block'})
})



$('.btn button').mouseenter(function(){
    $(this).addClass('on')
}).mouseleave(function(){
    $(this).removeClass('on')
})