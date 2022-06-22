$('.gnb li a, #remote a, .mb_gnb a').click(function(e){
    e.preventDefault()
    let href = $(this).attr('href')
    let secT = $(href).offset().top;
    $('html').animate({scrollTop : secT})
})

let sw = 0;
$('.mb_btn').click(function(){
    sw = !sw;
    if(sw){
        $('.wrap').stop().animate({'left': '-150px'})
    }else{
        $('.wrap').stop().animate({'left': 0})
    }
})

let pos = 0
let winW = $(window).width()

$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let winH = $(window).height()
    
    $('section').each(function(i){
        let secT = $(this).offset().top;
        if(scrT >= secT - 200){
            $('#remote li a').removeClass('on')
            $('#remote li').eq(i-1).find('a').addClass('on')
            $(this).find('.subTitle').addClass('on')
            $(this).find('.banner').addClass('on')
            $(this).find('.moveBG').addClass('on')
        }else if(scrT < winH){
            $('#remote li a').removeClass('on')
        }
    })

    if(scrT >= 400){
        $('.fixedShrimp').addClass('on')
    }else(
        $('.fixedShrimp').removeClass('on')

    )

    $('.content').each(function(){
        let secT = $(this).offset().top;   
        let contH = $(this).height();
        if(contH == 0){
            $(this).removeClass('on')

        }else{
            
            sw = $(this).hasClass('on')
            if(sw){
                $('.fixedShrimp').addClass('left')
            }else{
                $('.fixedShrimp').removeClass('left')
            }

            if(scrT >= secT +  (contH - 200) || scrT < secT - 400 ){
                $(this).removeClass('on')
            }else{
                $(this).addClass('on')
            }
        }

        

    })

    
})

function toggle(imgElem, obj1, obj2){
    let thisImg = $(imgElem).find('img').attr('src')
    let toggleImg = thisImg.replace(obj1, obj2);

    $(imgElem).find('img').attr('src', toggleImg)
}

$('.banner li a').on({
    mouseenter:function(){
        toggle(this, 'Off', 'On')
    },
    mouseleave:function(){
        toggle(this, 'On', 'Off')
    },
    click:function(e){
        e.preventDefault()
        let href = $(this).attr('href')
        let sectHeight = $(href).height()

        $('.cont').stop().fadeOut()
        $(href).stop().fadeIn()

        let active = $(href).closest('.content')
        $('.content').not(active).css({'height': 0, 'paddingBottom':0})
        $(href).closest('.content').stop().animate({'height':sectHeight + 100, 'paddingBottom':'50px'})

       
    }
})

$('.close').click(function(){
    $('.content').stop().animate({'height': 0, 'paddingBottom':0})
    $('.content').removeClass('on')
    $('.fixedShrimp').removeClass('left')
})
    

$(window).resize(function(){
    location.load()
})