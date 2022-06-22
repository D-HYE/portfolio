let psw = 0; //pc스위치
let msw = 0; //mobile 스위치
let wid = 0;

function mobile(){
   $('.gnbWrap').css({'left' : 0}); 
   $('.gnb').stop().animate({'width':'100%'})
   $('.page-content').css({'display':'none'})
   $('.info a').removeClass('active')
   
}

function pc(){
    $('.gnbWrap').css({'left' : '-351px'});
    $('.gnb').stop().animate({'width':'45px'})
    $('.container').stop().animate({'marginTop':'0'})
    $('.page-content').css({'display':'block'})
    $('.info a').removeClass('active')
}

function setWid(){
    wid = $(window).width();

    if(wid >= 501){
        pc()
    }else if(wid < 501){
        mobile()
    }
}




$('.info a').click(function(e){
    e.preventDefault();
    psw = true;
    msw = true;
    wid = $(window).width();
    $('.barWrap').addClass('change')

    let href = $(this).attr('href');
    $('.page').fadeOut()
    $(href).fadeIn()

    $('.info a').removeClass('active')
    $(this).addClass('active')


    if(wid >= 501){
        $('.gnb').stop().animate({'width':'120px'}, function(){
            $('.gnb').addClass('on')
            $('.gnbWrap').stop().animate({'left' : 0}); 
        })
    }else if(wid < 501){
        $('.page-content').slideDown()
        $('.container').stop().animate({'marginTop':'500px'})
        
    }
    

})

$('.barWrap').click(function(){
    wid = $(window).width();

    if(wid >= 501){
        psw = !psw;
        if(psw){
            $('.barWrap').addClass('change')
            $('.gnb').stop().animate({'width':'120px'}, function(){
                $('.gnb').addClass('on')
            })
        }else{
            $('.barWrap').removeClass('change')
            $('.gnb').removeClass('on')
            $('.gnb').stop().animate({'width':'45px'})
            $('.gnbWrap').stop().animate({'left' : '-351px'});
            $('.info a').removeClass('active') 
        }

    }else if(wid < 500){
        
        msw = !msw;
        if(msw){
            $('.barWrap').addClass('change')
            $('.page-content').slideDown()
            $('.container').stop().animate({'marginTop':'500px'})
            $('#aboutMe').show()
            $('.info a').eq(0).addClass('active')
        }else{
            $('.barWrap').removeClass('change')
            $('.page-content').slideUp()
            $('.container').stop().animate({'marginTop':'0'})
            $('.page').hide()
            $('.info a').removeClass('active')
        }
    }

    $(window).resize(function(){
        setWid();
        let psw = 0;
        let msw = 0; //초기화
        $('.barWrap').removeClass('change')
        $('.gnb').removeClass('on')
    });

})

$('.info .fa-question-circle').click(function(){
    $('.myBar').css({'width': 15 + '%'})
    $('.myBar span').html('0%')

    setTimeout(function(){delay()}, 1000)

    function delay(){
        $('.myProgress').each(function(index){
            let skill = $(this)
            let dataS = skill.find('.myBar span').attr('data-score');
    
            setTimeout(function(){
                move()
            }, index*500)
    
            function move(){
                
                let wid = 1;
                let play = setInterval(frame, 5)
        
                function frame(){
                    if(wid >= dataS){
                        clearInterval(play);
                    }else{
                        wid++;
                        skill.find('.myBar').css({'width': wid + "%"});
                        skill.find('.myBar span').text(wid + "%");
                    }
                }
            }
    
        })
    }
    
})

$('#aboutMe').mCustomScrollbar({
    theme: 'minimal',
    autoHideScrollbar:true
})
