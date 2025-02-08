function lokoMotiveScrollTriggerCodePan() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
lokoMotiveScrollTriggerCodePan();

function navbarAnimation(){
    gsap.to("#nav-part1 svg",{
        transform : "translateY(-100%)",
        scrollTrigger:{
            trigger  : '#page1',
            scroller : '#main',
            // markers : true,
            start : 'top 0',
            end : 'top -5%',
            scrub  : true,
        }
    })
    gsap.to("#nav-part2 #links",{
        transform : "translateY(-100%)",
        opacity : 0,
        scrollTrigger:{
            trigger  : '#page1',
            scroller : '#main',
            // markers : true,
            start : 'top 0',
            end : 'top -5%',
            scrub  : true,
        }
    })
    
}
navbarAnimation();

function videoContainerGsapCursor() {
    let videoCon = document.querySelector("#video-container")
    let playBtn = document.querySelector("#play");

    videoCon.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            opacity: 1,
            scale: 1,
        })
    })
    videoCon.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            opacity: 0,
            scale: 0,
        })
    })
    videoCon.addEventListener("mousemove", function (det) {
        gsap.to(playBtn, {
            left: det.x - 20,
            top: det.y - 50,
        })
    })

}
videoContainerGsapCursor();

function h1Container() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.9,
        stagger: 0.2,
    })
    gsap.from("#page1 #video-container", {
        scale: 0.3,
        opacity: 0,
        delay: 1.5,
        duration: 0.6,
    })
}
h1Container();

function page3AnimationCursor() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
    document.querySelector("#page3").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)',
        })
    })
    document.querySelector("#page3").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })
}
page3AnimationCursor();