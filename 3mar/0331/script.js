$('.content').mouseenter(function(){

    //넓이

    //$('.content').stop().animate({'flex' : 10 + 'vw'})
    //$(this).stop().animate({'width': 70 + 'vw'})


    //내용
    $(this).find('.imgbox').hide()
    $(this).find('.videobox').show()
    $(this).find('.txtbox').show()
    $(this).find('p').stop().fadeIn(1000)
    $('.content').not($(this)).find('.title').stop().fadeOut()

    
    
    let v = $(this).find('video').get(0)
    v.play();

}).mouseleave(function(){

    // 넓이
    //$('article').stop().animate({'width': 25 + 'vw'})

    $(this).find('.imgbox').show()
    $(this).find('.videobox').hide()
    $(this).find('.txtbox').hide()
    $(this).find('p').hide()
    $('.content').find('.title').stop().fadeIn()
    

    let v = $(this).find('video').get(0)
    v.currentTime = 0;
})