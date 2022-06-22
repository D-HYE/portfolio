$(function(){
    $('button.up').click(function(){
        $('.newsList').animate({'top':'-140px'}, function(){
            $('.newsList p').eq(0).appendTo('.newsList')
            $('.newsList').css({'top':'-80px'})
        });
    })
    $('button.down').click(function(){
        $('.newsList').animate({'top':'-20px'}, function(){
            $('.newsList p').eq(2).prependTo('.newsList')
            $('.newsList').css({'top':'-80px'})
        });
    })

    $('.productList li').click(function(){
        let idx = $(this).index();

        $('.productList li a').removeClass('active');
        $(this).find('a').addClass('active')

        $('.content').removeClass('active');
        $('.content').eq(idx-1).addClass('active');

    })
})