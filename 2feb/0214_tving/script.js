function mainHide() {
    $('.leftCont figure').animate({ 'top': '-540px' });
    $('.btnWrap').animate({ 'bottom': '-200px' });
    $('.rightCont figure').delay(500).animate({ 'top': '0', 'width': '250px' }, 1000);
    $('.bg').fadeIn();

}
function mainShow() {
    $('.leftCont figure').animate({ 'top': '0' });
    $('.btnWrap').animate({ 'bottom': '170px' });
    $('.rightCont figure').animate({ 'top': '20%', 'width': '400px' }, 1000);
}

function boxAni1() {
    $('.box1').fadeIn(500, function () {
        $('.box1 button').animate({'width': '50px', 'opacity': .5})
        $('p.lineTop').stop().animate({ 'width': '100%' }, function () {
            $('p.lineRight').stop().animate({ 'height': '100%' }, function () {
                $('p.lineBottom').stop().animate({ 'width': '100%' }, function () {
                    $('p.lineLeft').stop().animate({ 'height': '100%' }, function () {
                        $('.art1').stop().fadeIn(500);
                    })
                })
            })
        })
    })
}
$('.box1 button').mouseenter(function(){
    $(this).animate({'width': '100px', 'opacity': 1})
}).mouseleave(function(){
    $(this).animate({'width': '50px', 'opacity': .5})
})
function boxHide1() {
    $('.art1').stop().fadeOut();
    $('.box1').stop().fadeOut(500, function () {
        $('p.lineTop').stop().animate({ 'width': '0' })
        $('p.lineRight').stop().animate({ 'height': '0' })
        $('p.lineBottom').stop().animate({ 'width': '0' })
        $('p.lineLeft').stop().animate({ 'height': '0' })
        $('.box1 button').animate({'width': '100px', 'opacity': 0})
    })
    $('.bg').stop().fadeOut();
}

function boxAni2() {
    $('.box2').stop().fadeIn(500, function () {
        $('p.lineTop').stop().animate({ 'width': '100%' }, function () {
            $('p.lineRight').stop().animate({ 'height': '100%' }, function () {
                $('p.lineBottom').stop().animate({ 'width': '100%' }, function () {
                    $('p.lineLeft').stop().animate({ 'height': '100%' }, function () {
                        $('.art2').stop().animate({ 'height': '100%', 'opacity': 1 }, 1500)
                    })
                })
            })
        })

    })
}
function boxHide2() {
    $('.art2').stop().animate({ 'height': '0', 'opacity': 0 });
    $('.box2').stop().fadeOut(500, function () {
        $('p.lineTop').stop().animate({ 'width': '0' })
        $('p.lineRight').stop().animate({ 'height': '0' })
        $('p.lineBottom').stop().animate({ 'width': '0' })
        $('p.lineLeft').stop().animate({ 'height': '0' })
    })
    $('.bg').stop().fadeOut();
}

$('.box1 .close').click(function () {
    mainShow();
    boxHide1()
})
$('.box2 .close').click(function () {
    mainShow();
    boxHide2()
})

$('.btn1 a').click(function () {
    mainHide();
    boxAni1();
})

$('.btn2 a').click(function () {
    mainHide();
    boxAni2()
})

$('.left').click(function(){
    $('.art1 ul').animate({ 'marginLeft': '-340px' }, function () {
        $('.art1 ul li').eq(0).appendTo('.art1 ul')
        $('.art1 ul').css({ 'marginLeft': '0' })
    })
})
$('.right').click(function(){
    $('.art1 ul').animate({ 'marginLeft': '0' }, function () {
        $('.art1 ul li').eq(4).prependTo('.art1 ul')
        $('.art1 ul').css({ 'marginLeft': '-340px' })
    })
})

