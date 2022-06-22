$(function(){

    $('.container').hide();
    $('.tabLink li:first a').addClass('active').show();
    $('.container').eq(0).show();

    $('.tabLink li a').click(function(){
        
        $('.tabLink li a').removeClass('active');
        
        $(this).addClass('active');
        $('.container').hide();

        var please = $(this).attr('href');
        $(please).show();

        return false;
    });

});