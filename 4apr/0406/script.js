/*
$('li').click(function(e){
    e.preventDefault()
    
    let idx = $(this).index()
    $('#bg').removeClass()
    $('#bg').addClass('bg'+idx)
    $('#cube').removeClass()
    $('#cube').addClass('show'+idx)
    $('.explain>div').hide()
    $('.desc'+idx).fadeIn()
})
*/

let sect = document.querySelector('#sect2');
let liElem = document.querySelector('.list');
let desc = document.querySelector('.inner')

let currentClass=''

function changeSide(e){
    e.preventDefault()
    // let liElementext = e.target.innerText
    // let liElementext = e.target.innerHTML
    // let liElementext = e.target.textContent
    // 태그 안의 내용을 가져오는 방법
    let idx = e.target.dataset.id
    let showClass = 'content' + idx
    

   
    
    if(currentClass){
        sect.classList.remove(currentClass)
        console.log(-350*idx)
        desc.style.cssText = `margin-top: ${-350*idx}px; transition: .5s`  
    }
    sect.classList.add(showClass);
    //classname 은 클래스로 바꾸는 것
    currentClass = showClass
}
liElem.addEventListener('click', changeSide)

$('.list').mCustomScrollbar({
    theme: 'dark-thick',
    autoHideScrollbar:true
});

$('section').mousewheel(function(e, delta){
    if(delta > 0){
        let prev = $(this).prev().offset().top
        $('html').stop().animate({'scrollTop': prev})
    }else if(delta <= 0){
        let next = $(this).next().offset().top
        $('html').stop().animate({'scrollTop': next})
    }
  
})

/*
    이름 바꾸는 걸로 하는 법
    let desc = $(this).html()
    $('#cube').removeClass()
    $('#cube').addClass('show'+desc)
*/