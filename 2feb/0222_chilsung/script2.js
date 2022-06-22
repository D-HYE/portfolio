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


    function pointA(me){
        let liPosX = me.position().left;
        let liWid = me.width()/2;
        $('.dot').stop().animate({'left': liPosX+liWid-5})
        /* console.log(liPosX, liWid) */
    }
    pointA($('.productList li').eq(0).find('a'))

    $('.content:gt(0)').hide()

    $('.productList li a').click(function(e){
        e.preventDefault()
        
        pointA($(this))

        $('.productList li a').removeClass('active');
        $(this).addClass('active')

        
        let list = $(this).attr('href');

        $('.content').removeClass('on');
        $(list).addClass('on');

        $('.content').hide();
        $('.content .product > *').css({'opacity':'0'});
        $('.content .desc').css({'top':'20px'});
        $('.content .btnWrap').css({'bottom':'-20px'});
        $('.content .mainImg').css({'marginTop':'20px'});
        $('.content .subImg').css({'marginTop':'20px'});

        $(list).show();
        $(list).find('.desc').animate({'opacity':'1', 'top':'0'});
        $(list).find('.btnWrap').delay(300).animate({'opacity':'1', 'bottom':'0'});
        $(list).find('.imgWRap').delay(500).animate({'opacity':'1'});
        $(list).find('.subImg').css({'opacity':'0'});
        $(list).find('.mainImg').delay(500).animate({'opacity':'1', 'marginTop':'0'});
        $(list).find('.subImg').delay(800).animate({'opacity':'1', 'marginTop':'0'});


        
    })

    $(window).resize(function(){
        pointA($('.productList li').eq(0).find('a'))

        $('.productList li a').removeClass('active');
        $('.productList li a').eq(0).addClass('active');

        $('.content').hide();
        $('.content').eq(0).show();
        $('.content').eq(0).find('.product > *').css({'opacity':'1'});
    })

    let $grid = $('.grid').imagesLoaded( function() {
        $grid.isotope({
            itemSelector: '.grid-item',
        });
    });

    $('.product-content>div:gt(0)').hide()
    $grid.isotope({filter:'.soda-item'});

    $('.product-select a').on('click', function(e) {
        e.preventDefault();
        let href = $(this).attr('href')
        $('.bottom-content').css({'background-image': 'url(' + href + ')'})


        let idx = $(this).parent('li').index()
        $('.product-content>div').hide()
        $('.cont'+idx).show()


        $('.product-select a').removeClass('on')
        $(this).addClass('on')

        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


})