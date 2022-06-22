$(function(){
    let sw = 0;

    $('.bar').click(function(){
        sw = !sw;
        if(sw){
            $(this).addClass('change');
            $('.sideNav').stop().animate({left : 0})
            $('.dim').show();
        }else{
            $(this).removeClass('change');
            $('.sideNav').stop().animate({left : -300});
            $('.dim').hide();
        }
    })
    
    $(window).resize(function(){
        sw = 0;
        let wd = $(this).width();

        if(wd >= 960){
            $('.bar').removeClass('change');
            $('.sideNav').css({left : -300});
            $('.dim').hide();
        }
    });

    $('.content').load('./main.html')
    $('header a, nav a').click(function(e){
        e.preventDefault()
        let href = $(this).attr('href')
        $('.content').load(href)
    })
});