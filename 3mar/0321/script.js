let bsw = 0;
let msw = 0;

/*
$('header .inner>a').click(function(e){
    e.preventDefault();

    let active = $(this).hasClass('on')
    let letsgo = $(this).attr('herf')

    if(active){
        $(this).removeClass('on')
        $(letsgo).stop().slideUp();
    }else{
        $(this).addClass('on')
        $(letsgo).stop().slideDown();
    }
})
*/



$('.bar').click(function(e){
    e.preventDefault();
    bsw = !bsw;
    
    if(bsw){
        $(this).addClass('change');
        $('.menu').stop().slideDown()
    }else{
        $(this).removeClass('change');
        $('.menu').stop().slideUp()
    }
})

$('.myicon').click(function(e){
    e.preventDefault();
    let button = $(this);
    msw = !msw;
    
    if(msw){
        click(button, 'red', 'gray');
        $('.login').stop().slideDown();
    }else{
        $('.login').stop().slideUp()
        click(button, 'gray', 'red');
    }
})


$('.productTitle button').click(function(){
   
    let button = $(this)
    let active = $(this).hasClass('active')

    if(!active){
        $(this).addClass('active')
        $(this).parents('.product').find('.content').stop().slideDown()
        click(button, 'down', 'up')
    }else{
        $(this).removeClass('active')
        $(this).parents('.product').find('.content').stop().slideUp()
        click(button, 'up', 'down')
    }
})

function click(elem, click1, click2){
    let rename = $(elem).find('img').attr('src').replace(click1, click2)
    $(elem).find('img').attr('src', rename)
}

$('.productItem li').click(function(e){
    e.preventDefault();
    let href = $(this).find('a').attr('href')
    let idx = $(this).index();

    $(this).siblings().removeClass('on')
    $(this).addClass('on')

   $(this).parents('.product').find('.productImg img').attr('src', href)
    
    $(this).parents('.content').find('.desc').removeClass('on')
    $(this).parents('.content').find('.desc').eq(idx).addClass('on')
})

$('.like').click(function(){
    let active = $(this).find('p').hasClass('on')

    if(!active){
        $(this).find('p').addClass('on')
    }else{
        $(this).find('p').removeClass('on')
    }
})