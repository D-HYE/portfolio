
const tl = gsap.timeline();
  //배경

tl.to('.layer', {y : '-100%', stagger: -.5, ease: Sine.easeIn});
  //글자 등장
tl.to("line", {attr: {x1: 5, x2: 95}, delay: 0.3, ease: Power2.easeIn});
tl.to("#target1", {y: -12, delay: 0.3}, "move1");
tl.to("#target2", {y: 12, delay: 0.3}, "move1");
tl.to("#theSquare", {attr: { height: 60,  y: 33.7}, duration: 1.2, delay: 0.3}, "move1");
tl.to("#slogan", {scale:1.1, duration: .7, ease: Bounce.easeIn}, "move1")
  //글자 삭제
tl.to("#target1", {y: -0.4, duration: 0.4, delay: 0.1}, "move2");
tl.to("#target2", {y: 0.4, duration: 0.4, delay: 0.1}, "move2");
tl.to("#theSquare", {attr: { height: 0,  y: 49.5}, duration: .35}, "move2");
tl.to("#text1", {duration: .1, autoAlpha:0}, "clear1");
tl.to("#text2", {duration: .1, autoAlpha:1}, "clear1");
tl.to("#text3", {duration: .1, autoAlpha:1}, "clear1");
  //글자 등장
tl.to("line", {y: 9, stroke: "#00747c", strokeWidth:"2", duration: 0.4, delay: 0.2, ease: Bounce.easeOut}, "move3");
tl.to("#theSquare", {attr: { height: 60,  y: 29}, duration: 1, delay: 0.2}, "move3");
tl.to("line", {attr: {x1: 40, x2: 100}, ease: Back.easeOut.config(1.7)}, "scale");
tl.to("#text2", {scale: 0.9, ease: Back.easeOut.config(1.7)}, "scale");
tl.to("#text3", {scale: 1.3, x: 41, y: 50, ease: Bounce.easeOut}, "scale");

tl.to("line", {attr: {x1: 100, x2: 100}, delay: 1}, "clear2");
tl.to("#theSquare", {scaleX: 0, duration: 0.4,  delay: 1}, "clear2");
tl.to("#open", {opacity: 0});
tl.to("#skip_btn", {display: "none", opacity: 0});

tl.to("#open", {display: "none"}, "block");
tl.to("header", {opacity: 1}, "block")
tl.to("#sect1", {opacity: 1}, "block")


$('#skip_btn').click(function(){
  $('#open').hide();
  $('header').show();
  $('header').css("opacity", 1);
  $('#sect1').show();
  $('#sect1').css("opacity", 1);
  $(this).hide();
});


    


gsap.registerPlugin(ScrollTrigger);

  gsap.to("body", {
    scrollTrigger: {
      trigger: "#sect1",
      scrub: true,
      start: "top top",
    end: "+=800",
    }
  });

  gsap.to("#horizon", {
    opacity:1,
    scrollTrigger: {
      trigger: "#sect2",
      scrub: true,
      start: "-=40%",
    end: "-=5%",
      
    }
  });

  let sections = gsap.utils.toArray("#horizon .content");
  let pinWrap = document.querySelector("#horizon");
  let pinWrapWidth = pinWrap.offsetWidth;

  gsap.to(sections, {
    xPercent: -100 * (sections.length),
    ease: "none",
    scrollTrigger: {
      trigger: "#sect2",
      pin: true,
      scrub: 1,
      end: pinWrapWidth,
    }
  });

  gsap.to(".appear1", {
    y:0,
    opacity:1,
    smooth: true,
    scrollTrigger: {
      trigger: "#sect3",
      scrub: true,
      start:"-=30%",
      end: "-=7%",
    },
  });
  gsap.to(".appear2", {
    backgroundColor: '#00474a',
    scrollTrigger: {
      trigger: "#sect4",
      scrub: true,
      start:"+=30%",
      end: "+=50%",
    }
  });


  let speed = 100;
  const scene1 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene1,
        trigger: "#sect5",
        start: "10%",
        end: "20%",
        scrub: 1,
    });

    
  
  scene1.from(".introduce1", { y: 10 * speed})
        .from(".introduce2", { y: 10 * speed, opacity: 0})
        .to(".introduce2", {scale: 1.3, ease: Bounce.easeOut, duration: .7})
        .to(".introduceImg", {y: -100, opacity: 1, duration: .5})

  const scene2 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene2,
        trigger: "#sect5",
        start: "25%",
        end: "35%",
        scrub: 1,
    });
  scene2.to(".introduce1", {y: -5 * speed}, 'set1')
        .to(".introduce2", {y: -5 * speed}, 'set1')
        .from(".profile1", {x: 10 * speed}, 'set1')
        .from(".profile2", {x: 10 * speed}, 'set1')
        .to(".introduceImg", {x: 200}, 'set1')
        .from(".profile3", {x: 10 * speed, opacity: 0}, 'set7')
        .to(".introduceImg", {y: -300}, 'set7')
      
  const scene3 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene3,
        trigger: "#sect5",
        start: "40%",
        end: "50%",
        scrub: 1,
    });

  scene3.to(".profile3", {x: -5 * speed, opacity: 0}, 'set2')
        .from(".introduce", {x: 10 * speed}, 'set2')
        
        
        
  const scene4 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene4,
        trigger: "#sect5",
        start: "50%",
        end: "65%",
        scrub: 1,
  });
  scene4.to(".profile1", {y: -10 * speed}, 'set3')
        .to(".profile2", {y: -10 * speed}, 'set3')
        .to(".introduceImg", {y: -2000}, 'set3')
        .to(".introduce", {y: -10 * speed}, 'set3')
        .from(".background1", {y: 10 * speed}, 'set3')

  const scene5 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene5,
      trigger: "#sect5",
      start: "67%",
      end: "80%",
      scrub: 1,
    });

    scene5.to(".skill", {y: -750, display: "block", ease: 'none', duration: 1},'set4')
        .from(".background2", {y: 10 * speed, 'opacity': 0,})
        

  const scene6 = gsap.timeline();
    ScrollTrigger.create({
          animation: scene6,
          trigger: "#sect5",
          start: "81%",
          end: "+=120%",
          scrub: 1,
        });

        scene6.to(".skill", {y: -1200}, 'set6')
        .to(".background2", {y: -1000}, 'set6')

 

ScrollTrigger.refresh();


