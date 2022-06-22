$(function(){
    $('.time li').click(function(e){
        e.preventDefault();
        
        let timeN = $(this).index()
        $('.img li').removeClass('on');
        $('.cont').removeClass('on');

        $('.img li').eq(timeN).addClass('on');
        $('.cont').eq(timeN).addClass('on');
    })
   
});