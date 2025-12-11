document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    Physics2DPlugin,
    PhysicsPropsPlugin,DrawSVGPlugin,SplitText
  );

  gsap.set("#tl", {rotation:180,transformOrigin: "50% 50%"});
  if(window.matchMedia("(min-width: 768px)").matches){
    // ScrollSmoother for smooth scrolling effect on desktop only


    // Animations timeline FOR HOME SECTION
 let split = SplitText.create("#text1", { type: "words, chars" });
const tl = gsap.timeline()
 tl.from("#KRZ", {duration:3,delay:1,y:50,scale:2,transformOrigin: "center center",});
 
 tl.from("#copieRight", {duration:2,opacity:0,y:20,ease:"elastic"});
 tl.from("#myProtfolio", {duration:1,opacity:0,});
 tl.to("#copieRight,#myProtfolio", {duration: 1, opacity:0,delay:1.5});
tl.from("#earth", {duration:1 , opacity:0,scale:2 })
tl.to("#KRZ", {duration:2.5,scale:2,fill:" #f5f2f2ea"},"<");

tl.from("#tl", {duration: 1, opacity:0,scale:1.5},"<");
tl.from("body", {duration: 1,backgroundColor:"#ebebebff"},"<");
tl.to("#HOME", {duration:1,backgroundColor: "#000000ff"});

tl.to("#KRZ", {duration:1,scale:3,x:-300,y:10,onComplete:()=>{const tl1 = gsap.timeline();
        tl1.to('#KRZ', {duration: 2,y:9,yoyo:true,repeat:-1});}});






tl.from(".nav", {duration:1, y:-100,opacity:0})
tl.from(split.chars, {
  duration: 1, 
  opacity:0,     
  autoAlpha: 0, 
  stagger: 0.05 ,



  
},"<");
tl.from("#scrollBtn1,#scrollBtn", {duration: 1,opacity:0,x:100});




gsap.set('#scrollIcone', {scale:0.9,transformOrigin: "50% 50%"});
tl.from("#scrollDown", {duration: 1, opacity:0,y:100
,onComplete:()=>{
  gsap.set('#scrollIcone', {scale:0.9});
gsap.to('#scrollIcone', {duration: 5, rotation:360,repeat:-1,transformOrigin: "50% 50%",ease:'none',});
gsap.to('#scrollIcone', {duration: 4,yoyo:true,repeat:-1,scale:0.99,ease:"none"});

const tl = gsap.timeline({repeat:-1,});


tl.to("#arrow1", {duration: 1, y:7});
tl.to("#arrow2", {duration: 1, y:7},0.5);
tl.to("#arrow3", {duration: 1, y:7},0.25);
tl.to("#arrow1", {duration: 0.5, y:0});
tl.to("#arrow3", {duration: 0.5, y:0});
tl.to("#arrow2", {duration: 0.5, y:0});
}

});
tl.from("html,body", {overflow:"hidden"});

  ScrollSmoother.create({
    wrapper: ".ScrollSmoother-warapper",
    content: ".wrapper",
    smooth: 1.5,
    effects: true,ease: "power1.out",
  });

  // Horizontal scroll section

  gsap.to('.cont', {
	 duration:5,
   scale:1,
	x: '-100vw',ease:"none",
  scrollTrigger:{
    trigger:"#ABOUT",scrub:true,start:"top top ",end:'bottom ',pin:true,
  },});

  // Scroll up button functionality
document.getElementById("scrollBtn").addEventListener("click", () => {
  const targetPos = smoother.scrollTop() - window.innerHeight;
  gsap.to("#scrollBtn", {duration:1, ease:"power2.inOut",opacity:0,y:-50,yoyo:true,repeat:1});
  gsap.to("#contNav", {duration:1.7, top:"-100px",});
gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-5px"});
 gsap.to(window, {duration: 1, scrollTo: targetPos});
});

// Scroll down button functionality
document.getElementById("scrollBtn1").addEventListener("click", () => {
  const targetPos = smoother.scrollTop() + window.innerHeight;
  gsap.to("#scrollBtn1", {duration:1, ease:"power2.inOut",opacity:0,y:50,yoyo:true,repeat:1});
gsap.to("#contNav", {duration:1.7, top:"-100px",});
  gsap.to(window, {duration: 1, scrollTo: targetPos});
  gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-5px"});
});

// Hide scrollBTN UP button when reaching HOME section
ScrollTrigger.create({
  trigger: "#HOME",
  start: "top center ",
  end: "bottom center",

  onEnter: () => {
    
   document.getElementById("scrollBtn").style.display = "none";
  },
  onEnterBack: () => {
    document.getElementById("scrollBtn").style.display = "none";
  },
  onLeave: () => {
    document.getElementById("scrollBtn").style.display = "block";
  },
});
// Hide scrollBTN down button when reaching CONTACT section
ScrollTrigger.create({
  trigger: "#CONTACT",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    
   document.getElementById("scrollBtn1").style.display = "none";
  },
  onLeaveBack: () => {
    document.getElementById("scrollBtn1").style.display = "block";
  },

});
//Desktop animations
const tl7 = gsap.timeline({scrollTrigger:{
  trigger:"#ABOUT",
  start:"top top",
  end:"bottom center",

  
  onLeave:()=>{
     gsap.set("#textH31,#textH32,#textH33,.panel1", {display:"block",opacity:1})
    const tl = gsap.timeline({});
    tl.from(".panel1", {duration: 3, opacity:0,});
    tl.from("#textH31", {duration: 1,ease:"back.out(1.7)", opacity:0,y:-50},"-=200%");
    tl.from("#textH32", {duration: 1,ease:"back.out(1.7)", opacity:0,x:-50},"-=150%");
    tl.from("#textH33", {duration: 1,ease:"back.out(1.7)", opacity:0,x:50},"-=100%");

   }
,}});
// Skills section animation
const tl4 = gsap.timeline({scrollTrigger:{trigger:"#SKILLS",start:"top 80%",}});
tl4.from('#list11', {duration: 1, opacity:0,y:50,delay:0.5,ease:"back.out(1.7)"});
tl4.from('#list12', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl4.from('#list21', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl4.from('#list22', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl4.from('#list31', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
}


// Mobile animations
 if(window.matchMedia("(max-width: 767px)").matches){
// Animations timeline FOR HOME SECTION

gsap.set("#KRZ,#copieRight,#myProtfolio",{scale:1.8,transformOrigin: "center center",});
gsap.set("#KRZ",{y:-20,});
gsap.set("#myProtfolio",{y:10,});
 let split = SplitText.create("#text1", { type: "words, chars" });
const tl = gsap.timeline()
 tl.from("#KRZ", {duration:3,delay:1,y:50,scale:2,transformOrigin: "center center",});
 
 tl.from("#copieRight", {duration:2,opacity:0,y:20,ease:"elastic"});
 tl.from("#myProtfolio", {duration:1,opacity:0,});
 tl.to("#copieRight,#myProtfolio", {duration: 1, opacity:0,delay:1.5});
tl.to("#KRZ", {duration:2.5,scale:2,fill:" #f5f2f2ea"},);

tl.from("#tl", {duration: 1, opacity:0,scale:1.5},"<");
tl.from("body", {duration: 1,backgroundColor:"#ebebebff"},"<");
tl.to("#HOME", {duration:1,backgroundColor: "#000000ff"});

tl.to("#KRZ", {duration:1,scale:3.8,x:-265,y:10,onComplete:()=>{const tl1 = gsap.timeline();
        tl1.to('#KRZ', {duration: 2,y:9,yoyo:true,repeat:-1});}});






tl.from(".nav", {duration:1, y:-100,opacity:0})
tl.from(split.chars, {
  duration: 1, 
  opacity:0,     
  autoAlpha: 0, 
  stagger: 0.05 ,



  
},"<");
tl.from("#scrollBtn1,#scrollBtn", {duration: 1,opacity:0,x:100});



gsap.set('#scrollIcone', {scale:0.9,transformOrigin: "50% 50%"});
tl.from("#scrollDown", {duration: 1, opacity:0,y:100
,onComplete:()=>{
  gsap.set('#scrollIcone', {scale:0.9});
gsap.to('#scrollIcone', {duration: 5, rotation:360,repeat:-1,transformOrigin: "50% 50%",ease:'none',});
gsap.to('#scrollIcone', {duration: 4,yoyo:true,repeat:-1,scale:0.99,ease:"none"});
const tl = gsap.timeline({repeat:-1,});


tl.to("#arrow1", {duration: 1, y:7});
tl.to("#arrow2", {duration: 1, y:7},0.5);
tl.to("#arrow3", {duration: 1, y:7},0.25);
tl.to("#arrow1", {duration: 0.5, y:0});
tl.to("#arrow3", {duration: 0.5, y:0});
tl.to("#arrow2", {duration: 0.5, y:0});






}
});
tl.from("html,body", {overflow:"hidden"});


  const tl7 = gsap.timeline({delay:0.5,scrollTrigger:{
  trigger:".panel1",
  start:"top center",
  end:"bottom center",

  
  onEnter:()=>{
     gsap.set("#textH31,#textH32,#textH33", {display:"block"}) }
,}});

    tl7.from("#textH31", {duration: 1,ease:"back.out(1.7)", opacity:0,y:-50});
    tl7.from("#textH32", {duration: 1,ease:"back.out(1.7)", opacity:0,x:-50},"-=50%");
    tl7.from("#textH33", {duration: 1,ease:"back.out(1.7)", opacity:0,x:50},"-=50%");

// Skills section animation
    const tl4 = gsap.timeline({scrollTrigger:{trigger:"#SKILLS",start:"top 50%",}});
tl4.from('#list11', {duration: 2, opacity:0,y:50,delay:0.5,ease:"back.out(1.7)"});
tl4.from('#list12', {duration: 1.2, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl4.from('#list21', {duration: 1.2, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl4.from('#list22', {duration: 1.2, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl4.from('#list31', {duration: 1.2, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
}





const smoother = ScrollSmoother.get();
// Navigation scroll functionality
gsap.registerPlugin(ScrollToPlugin);
document.querySelector('ul[scroll-home]').addEventListener("click", () => {
gsap.to(window, {
  duration: 0.7,
  scrollTo: "#HOME",
  ease: "power2.out"
});
  
});

document.querySelector('ul[scroll-about]').addEventListener("click", () => {
 gsap.to(window, {
  duration: 0.7,
  scrollTo: "#ABOUT",
  ease: "power2.out"
});
  gsap.to("#contNav", {duration:1.7, top:"-100px",});
  gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-5px"});
  
});

document.querySelector('ul[scroll-skills]').addEventListener("click", () => {
 gsap.to(window, {
  duration: 0.7,
  scrollTo: "#SKILLS",
  ease: "power2.out"
});
  gsap.to("#contNav", {duration:1.7, top:"-100px",});
  gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-5px"});
  
});

document.querySelector('ul[scroll-project]').addEventListener("click", () => {
 gsap.to(window, {
  duration: 0.7,
  scrollTo: "#PROJECT",
  ease: "power2.out"
});
  gsap.to("#contNav", {duration:1.7, top:"-100px",});
  gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-5px"});
});

document.querySelector('ul[scroll-contact]').addEventListener("click", () => {
 gsap.to(window, {
  duration: 0.7,
  scrollTo: "#CONTACT",
  ease: "power2.out"
});
  gsap.to("#contNav", {duration:1.7, top:"-100px",});
  gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-5px"});
});
 






// Menu icon click functionality
document.getElementById("iconeMenu").addEventListener("click", () => {
  gsap.to("#iconeMenu", {duration:0.5,ease:"power2.inOut",top:"-100px"});
  
  gsap.to("#contNav", {duration:1, top:"0",});

  smoother.scrollTo(targetPos, true); 
});







const tl6 = gsap.timeline({scrollTrigger:{trigger:"#ABOUT",start:"top 50%",}});
tl6.from('#about', {duration: 1, opacity:0,x:-100,delay:0.5,ease:"back.out(1.7)"});
tl6.from('.photos1,.myPhtos', {duration: 1, opacity:0,x:100,ease:"back.out(1.7)"},"-=50%");
tl6.from('.definition1', {duration: 1, opacity:0,x:-100,delay:0.5,ease:"back.out(1.7)"},"-=80%");
tl6.from('.definition2', {duration: 1, opacity:0,x:100,ease:"back.out(1.7)"},"-=50%");

gsap.set('#textH31,#textH32,#textH33', {display:"none"});
 


gsap.to("#progress", {
  width: "100vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "max",
    scrub: true,
    marckers:true,
  }
});






const tl5 = gsap.timeline({scrollTrigger:{trigger:"#PROJECT",start:"top 80%",}});

tl5.from('.card1', {duration: 1, opacity:0,y:50,delay:0.5,ease:"back.out(1.7)"});
tl5.from('.card2', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl5.from('.card3', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl5.from('.card4', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl5.from('.card5', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");
tl5.from('.card6', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");





const tl8 = gsap.timeline({scrollTrigger:{trigger:"#CONTACT",start:"top 80%",}});

tl8.from('.contact-box a', {duration: 0.3,stagger: 0.4, opacity:0,x:-50,ease:"none" ,delay:1},"-=20%");
tl8.from('#textContact', {duration: 1, opacity:0,y:50,ease:"back.out(1.7)"},"-=50%");



});

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};
console.log(window.innerWidth,
window.innerHeight);


function fixVH() {
  const realVh = window.visualViewport?.height * 0.01;
  document.documentElement.style.setProperty("--vh", `${realVh}px`);
}

fixVH();
visualViewport.addEventListener("resize", fixVH);
visualViewport.addEventListener("scroll", fixVH);