$(function(){
    let set;



    function rotate(){
        $('.rotate').animate({rotate : '+=5deg'}, 100, 'linear');
    }
    
    $('.quickBtn').mouseenter(function(){
        set = setInterval(rotate, 100);
    }).mouseleave(function(){
        clearInterval(set);
    });

    $('.list .flex li').click(function(){
        let idx = $(this).index();
        $('.list .flex li').removeClass('on')
        $(this).addClass('on')

        $('.content .character').removeClass('on')
        $('.content  .character').eq(idx).addClass('on')
    })

    $('.markecting li').click(function(e){
        e.preventDefault()
        let idx = $(this).index();
        $('.markecting li').removeClass('active');
        $(this).addClass('active');

        $('.container .wrap').removeClass('active')
        $('.container .wrap').eq(idx).addClass('active')
    })
})