
$('.values ul li').mouseenter(function(){
    $('.values ul li').removeClass('on')
    $(this).addClass('on')
    $(this).find('p.detail').stop().fadeIn()
    $(this).find('p.txt').stop().hide()
})
$('.values ul li').mouseleave(function(){
    $('.values ul li').removeClass('on')
    $('p.detail').stop().fadeOut()
    $(this).find('p.txt').stop().show()

})

$(window).scroll(function () {
        let scrTop = $(this).scrollTop()
        $('.years ul li').each(function(i){

            let yearsTop = $(this).offset().top
            console.log(`offset ${ yearsTop}`)

            let calc = scrTop + 500

            if(yearsTop <=  calc){
           
                $('p.year').eq(i).addClass('on')
                 $('span.line').addClass('on')
            }


        })
            

})

$('.bar').click(function(){
    $('.sideNav').show();
    $('.sideNav').animate({'left': 0}, function(){
      $('.dim').fadeIn()
    })
  
  });
  $('.close').click(function(){
  
    $('.dim2').fadeOut()
    $('.sideNav').animate({'left': '-60%'}, function(){
      $('.sideNav').hide();
    })
  
});


  