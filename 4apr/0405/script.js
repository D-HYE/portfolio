
let n = 0

setInterval(function(){
    
    if(n < 3){
        //console.log(n)
        $('article').removeClass('on');
        $('article').eq(n).addClass('on');
        $('.sect-pagination span').removeClass('on');
        $('.sect-pagination span').eq(n).addClass('on');
        n++

    }else if(n = 3){
        n = 0
    }
}, 4500)

$('.sect-pagination span').click(function(){
    let idx = $(this).index();

    $('article').removeClass('on');
    $('article').eq(idx).addClass('on');
    $('.sect-pagination span').removeClass('on')
    $(this).addClass('on')
})

$('.pagination a').on('click', function(e){
    e.preventDefault()
    let href = $(this).attr('href')
    let thisST = $(href).offset().top
    $('html').stop().animate({'scrollTop' : thisST})
})

$(window).on('scroll', function(){
    let winST = $(this).scrollTop()
    let winH = $(window).height();

    $('section').each(function(i){
        let secST = $(this).offset().top

        if(i == 5){
            winST += winH/2
        }

        if(winST >= secST){
            $('.pagination a').removeClass()

            if( i == 2 || i == 4 ){
                $('.pagination a').eq(i).addClass('white')
                $('.pagination a span').css({'background':'#fff'})
                $('#logo a').css({'background-position-y':'-258px'})
            }else{
                $('.pagination a').eq(i).addClass('black')
                $('.pagination a span').css({'background':'rgb(51,51,51)'})
                $('#logo a').css({'background-position-y':'-288px'})
            }
        }
    })
})

$('section').mousewheel(function(e, delta){

    if(delta > 0){
        let prev = $(this).prev().offset().top
        $('html').stop().animate({'scrollTop': prev})
    }else if(delta <= 0){
        let next = $(this).next().offset().top
        $('html').stop().animate({'scrollTop': next})
    }
})

