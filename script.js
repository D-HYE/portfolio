let winW = $(window).width()
let winH = $(window).height()

// ----- 헤더 -----
$('header a, .mbNav a').on('click', function(e){
    e.preventDefault()
    let href = $(this).attr('href');
    let hrefST = $(href).offset().top;
    let idx = $(this).parent('li').index()
    if(idx == 0){
      if(hrefST > winH){
        $('html').stop().animate({'scrollTop': winH}, 700)
      }else{
        $('html').stop().animate({'scrollTop': hrefST}, 700)
      }
    }else{
      $('html').stop().animate({'scrollTop': hrefST}, 700)
    }
})

let sw = 0;

$('.bar').click(function(){
    sw = !sw;
    if(sw){
        $(this).addClass('change');
        $('.mbNav').animate({left : 0})
        $('.dim').show();
    }else{
        $(this).removeClass('change');
        $('.mbNav').animate({left : -300});
        $('.dim').hide();
    }
})

// ----- 스크롤 -----
$(window).on('scroll', function(){
    let winST = $(this).scrollTop()
    $('section').each(function(i){
      let secST = $(this).offset().top
      let secST4 = $('section').eq(4).offset().top
      if(winST >= secST){
        if(i >= 3){
            $('header').css({'border-color':'#fff'})
            $('#logo img').attr({'src':'./img/identity_simple_w.svg'})
            $('nav li').find('a').css({'color':'#fff'})
            $('.barDef').css({'background':'#fff'})
        }else{
            $('header').css({'border-color':'#ff5c5c'})
            $('#logo img').attr({'src':'./img/identity_simple_p.svg'})
            $('nav li').each(function(i){$(this).find('a').css({'color':'#ff5c5c'})})
            $('.barDef').css({'background':'#ff5c5c'})
        }
      }
      
      if(winST >= secST4 - 100){
        $('section').eq(4).addClass('fix')
      }else{
        $('section').eq(4).removeClass('fix')
      }
    })

})

$(window).on('scroll', _.throttle(function(){
  let winST = $(this).scrollTop()
  
    if(winST >= 11531, winST <= 12794){
      setTimeout(function(){delay()})

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
                          skill.find('.myBar span').css({'width': wid + "%"});
                          skill.find('.myBar span').text(wid + "%");
                      }
                  }
              }

          })
      }
    }
}, 5000, {leading:false, trailing:true}))

// ----- 스크롤 고정 -----
$('#open').on('scroll touchmove mousewheel', function(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});

// ----- 워크 움직이는 이미지 -----
let mouse = {X : 0, Y : 0, CX : 0, CY : 0},
  block = {X   : mouse.X, Y   : mouse.Y, CX  : mouse.CX, CY  : mouse.CY};

$('.worklist li').on('mouseenter', function(e) {
  mouse.X   = (e.pageX - $('#sect3 .imgbox').offset().left) - $('#sect3 .imgbox').width() / 2;
  mouse.Y   = (e.pageY - $('#sect3 .imgbox').offset().top) - $('#sect3 .imgbox').height() / 2;

  let data = $(this).attr('data-img')
  $('#sect3 .imgbox img').attr('src', data)
})

$('.worklist li').on('mouseleave', function(e) {
  mouse.X   = mouse.CX;
  mouse.Y   = mouse.CY;

  $('#sect3 .imgbox img').attr('src', "./img/thumnail00.png")
})

setInterval(function(){
  block.CY   += (mouse.Y - block.CY) / 10;
  block.CX   += (mouse.X - block.CX) / 10;
  $('#sect3 img').css({
    transform : 'scale(1.03) translate(' + (block.CX * -0.05) + 'px, ' + (block.CY * -0.05) + 'px) rotateX(' + (block.CY * 0.015) + 'deg) rotateY(' + (block.CX * 0.015) + 'deg)'
  })
}, 20);

// ----- 워크 버튼 -----
$('.all').on('click', function(){
  $('.worklist li').stop().fadeIn()
})

$('.list-responsive').on('click', function(){
  $('.worklist li').hide()
  $('.worklist .responsive').stop().fadeIn()
})
$('.list-renewal').on('click', function(){
  $('.worklist li').hide()
  $('.worklist .renewal').stop().fadeIn()
})
$('.list-copy').on('click', function(){
  $('.worklist li').hide()
  $('.worklist .copies').stop().fadeIn()
})
$('.list-process').on('click', function(){
  $('.worklist li').hide()
  $('.worklist .process').stop().fadeIn()
})


// ----- 디자인 카테고리 -----
$('.design').on('mouseenter', function(){
  $('.design').not(this).stop().animate({'opacity': 0.3})
  $(this).find('h3').stop().animate({'top': '-33%', 'opacity': 1})
  $(this).css({'z-index': 20})
})

$('.design').on('mouseleave', function(){
  $('.design').not(this).stop().animate({'opacity': 1})
  $(this).find('h3').stop().animate({'top': '0', 'opacity': 0})
  $(this).css({'z-index': 15})
})

// ----- 디자인 자동 슬라이드 -----
let dir = -1

setInterval(design_slide_L1, 20)
  let where1 = 0
  let speed1 = 1

setInterval(design_slide_R, 20)
  let where2 = 0
  let speed2 = 1
  
setInterval(design_slide_L2, 20)
  let where3 = 0
  let speed3 = 1

function design_slide_L1(){
  
    where1+=speed1*dir

    $('#slide1').css({'left': where1})

    if(winW >= 769){
      if(where1 <= -1920){
        where1 = 0
      }else if(where1 > 0){
        where1 = -1920
      }
    }else{
      if(where1 <= -1320){
        where1 = 0
      }else if(where1 > 0){
        where1 = -1320
      }
    }
}

function design_slide_R(){
  where2+=speed2*dir

  $('#slide2').css({'right': where2})

  if(winW >= 769){
    if(where2 <= -1920){
      where2 = 0
    }else if(where2 > 0){
      where2 = -1920
    }
  }else{
    if(where2 <= -1320){
      where2 = 0
    }else if(where2 > 0){
      where2 = -1320
    }
  }
}

function design_slide_L2(){
  
  where3+=speed3*dir

  $('#slide3').css({'left': where3})

  if(winW >= 769){
    if(where3 <= - 1920){
      where3 = 0
    }else if(where2 > 0){
      where3 = -1920
    }
  }else{
    if(where3 <= -1320){
      where3 = 0
    }else if(where3 > 0){
      where3 = -1320
    }
  }
}

$('#slide1').mouseenter(function(){
  speed1 = 0
}).mouseleave(function(){
  speed1 = 1
})
$('#slide2').mouseenter(function(){
  speed2 = 0
}).mouseleave(function(){
  speed2 = 1
})
$('#slide3').mouseenter(function(){
  speed3 = 0
}).mouseleave(function(){
  speed3 = 1
})

$(".group1").colorbox({rel:'group1', maxWidth:"80%"});
$(".youtube").colorbox({iframe:true, innerWidth:720, innerHeight:405});
$(".vimeo").colorbox({iframe:true, innerWidth:720, innerHeight:405});
$(".iframe").colorbox({iframe:true, innerWidth:"90%", height:"95%"});
$(".vimeo.vertical").colorbox({iframe:true, innerWidth:509, innerHeight:720});
