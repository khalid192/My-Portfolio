document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    Physics2DPlugin,
    PhysicsPropsPlugin,DrawSVGPlugin,SplitText
  );
  ScrollSmoother.create({
    wrapper: "",
    content: "",
    smooth: 3,
    effects: true,
  });




 let split = SplitText.create("#text1", { type: "words, chars" });
const tl = gsap.timeline()
 tl.from("#KRZ", {duration:3,opacity:0,delay:1,y:50,scale:2,transformOrigin: "center center",});
 
 tl.from("#copieRight", {duration:2,opacity:0,y:20,ease:"elastic"});
 tl.from("#myProtfolio", {duration:1,opacity:0,});
 tl.to("#copieRight,#myProtfolio", {duration: 1, opacity:0,delay:1.5});
tl.from("#earth", {duration:1 , opacity:0,scale:2 })
tl.to("#KRZ", {duration:2.5,scale:2,fill:" #c3d9ec"},"<");

tl.from("#tl", {duration: 1, opacity:0,scale:1.5},"<")

tl.to("#KRZ", {duration:1,scale:3,x:-300,y:10,onComplet:()=>{const tl1 = gsap.timeline();
        tl1.to('#KRZ', {duration: 2,y:9,yoyo:true,repeat:-1});}});






tl.from(".nav", {duration:1, y:-100,opacity:0})
tl.from(split.chars, {
  duration: 1, 
  opacity:0,     
  autoAlpha: 0, 
  stagger: 0.05 ,



  
},"<");
gsap.set('#scrollIcone', {scale:0.9,transformOrigin: "50% 50%"});
tl.from("#scrollDown", {duration: 1, opacity:0,y:100
,onComplete:()=>{
  gsap.set('#scrollIcone', {scale:0.9});
gsap.to('#scrollIcone', {duration: 5, rotation:360,repeat:-1,transformOrigin: "50% 50%",ease:'none',})
gsap.to('#scrollIcone', {duration: 4,yoyo:true,repeat:-1,scale:0.99,ease:"none"});
const tl = gsap.timeline({repeat:-1,})


tl.to("#arrow1", {duration: 1, y:7});
tl.to("#arrow2", {duration: 1, y:7},0.5);
tl.to("#arrow3", {duration: 1, y:7},0.25);
tl.to("#arrow1", {duration: 0.5, y:0});
tl.to("#arrow3", {duration: 0.5, y:0});
tl.to("#arrow2", {duration: 0.5, y:0});






}
});


gsap.to('.cont', {
	 duration:5,
   scale:1,
	x: '-100vw',ease:"none",
  scrollTrigger:{
    trigger:"#page1",scrub:true,start:"top top ",ent:'top bottom',pin:true
  },
 
});



gsap.from('#about,.definition1,.definition2', {duration: 3, opacity:0,y:-10,scale:0.5,ease:"elastic",delay:1,
  scrollTrigger:{
    trigger:'#page1',
    start:"top 80%",
    
  }
});
gsap.to("#textH32, #textH33, #textH31", {duration:1,y:5,scale:0.97,repeat:-1,yoyo:true,ease:'none'})



});
