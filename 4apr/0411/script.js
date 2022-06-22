var swiper = new Swiper(".main-slide", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

$('nav a').on('click', function(e){
  e.preventDefault()
  let href = $(this).attr('href')
  let thisST = $(href).offset().top

  $('html').stop().animate({'scrollTop' : thisST + 1}, 1000)
})
$('.shortcut a').on('click', function(e){
  e.preventDefault()
  let href = $(this).attr('href')
  //let thisST = $(href).offset().top

  $('html').stop().animate({'scrollTop' : thisST + 1}, 1000)
})

let color_y = ['header_nav_menu_introduce_y.png', 'header_nav_menu_yyd_y.png', 'header_nav_menu_banpo_y.png', 'header_nav_menu_ddp_y.png', 'header_nav_menu_cgc_y.png', 'header_nav_menu_season_market_y.png', 'header_nav_menu_cm_y.png']
let color_n = ['header_nav_menu_introduce_n.png', 'header_nav_menu_yyd_n.png', 'header_nav_menu_banpo_n.png', 'header_nav_menu_ddp_n.png', 'header_nav_menu_cgc_n.png', 'header_nav_menu_season_market_n.png', 'header_nav_menu_cm_n.png']
let color_w = ['header_nav_menu_introduce_w.png', 'header_nav_menu_yyd_w.png', 'header_nav_menu_banpo_w.png', 'header_nav_menu_ddp_w.png', 'header_nav_menu_cgc_w.png', 'header_nav_menu_season_market_w.png', 'header_nav_menu_cm_w.png']

let sns_y = ['sns_facebook_icon_y.png', 'sns_insta_icon_y.png', 'sns_twitter_icon_y.png', 'sns_youtube_icon_y.png']
let sns_n = ['sns_facebook_icon_n.png', 'sns_insta_icon_n.png', 'sns_twitter_icon_n.png', 'sns_youtube_icon_n.png']
let sns_w = ['sns_facebook_icon_w.png', 'sns_insta_icon_w.png', 'sns_twitter_icon_w.png', 'sns_youtube_icon_w.png']

$(window).on('scroll', function(){
  let winST = $(this).scrollTop()
  //console.log('scroll top' + winST)

  $('section').each(function(i){
    let secST = $(this).offset().top

    if(winST >= secST){
      $('header').removeClass()
      $('header').addClass('bg'+i)

      if(i == 1 || i == 2 || i == 4 || i == 5){
        $('#logo img').attr({'src':'./img/header_nav_logo_n.png'})
        $('nav li').each(function(j){$(this).find('img').attr('src', './img/'+color_n[j])})
        $('header .sns li').each(function(k){$(this).find('img').attr('src', './img/'+sns_n[k])})
      }else if(i == 0 || i == 3){
        $('#logo img').attr({'src':'./img/header_nav_logo_y.png'})
        $('nav li').each(function(j){$(this).find('img').attr('src', './img/'+color_y[j])})
        $('header .sns li').each(function(k){$(this).find('img').attr('src', './img/'+sns_y[k])})
      }else{
        $('#logo img').attr({'src':'./img/header_nav_logo_w.png'})
        $('nav li').each(function(j){$(this).find('img').attr('src', './img/'+color_w[j])})
        $('header .sns li').each(function(k){$(this).find('img').attr('src', './img/'+sns_w[k])})
      }
    }
  })
  
})

function change(liElem, before, after){
  let rename = $(liElem).find('img').attr('src').replace(before, after);
}