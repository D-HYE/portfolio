$('.itemList li').on({
    mouseenter:function(){
        let idx = $(this).index();

        $('.viewBtn').removeClass('on')
        $(this).find('.viewBtn').addClass('on')

    },
    click:function(){
        $('.viewBtn').removeClass('on')
        $(this).find('.viewBtn').addClass('on')
    },
})


$('.itemDetail .detail').hide()
$('.itemList a').click(function(e){
    e.preventDefault()
    let href = $(this).attr('href')
    let itemH = $(href).outerHeight()

    let sw = $(this).hasClass('on')

    if(sw){
        $(this).removeClass('on')

        $('.itemDetail').stop().animate({'height': 0, 'margin-bottom': 0})
        return false
        
    }else{
        $('.itemList a').removeClass('on')
        $(this).addClass('on')

        $('.itemDetail .detail').hide()
        $(href).stop().fadeIn()
        $('.itemDetail').stop().animate({'height': 0, 'margin-bottom': 0})
        $(href).closest('.itemDetail').stop().animate({'height': itemH, 'margin-bottom': '30px'})
    }

    

})

$('.kindList li').click(function(){
    let idx = $(this).index();
    let thisimg = $(this).find('img').attr('src')
    $(this).closest('.haveKind').find('.desc').hide()
    $(this).closest('.haveKind').find('.desc').eq(idx).show()

    $(this).closest('.haveKind').find('.imgbox img').attr('src', thisimg)

    $(this).closest('.haveKind').find('.kindList li').removeClass('on')
    $(this).addClass('on')
    

})

$('.close').click(function(){
    $(this).closest('.itemDetail').stop().animate({'height': 0, 'margin-bottom': 0})
    $('.itemList a').removeClass('on')
})