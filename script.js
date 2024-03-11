function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();
  gsap.from("#name>h1",{
    opacity:0,
    duration:1,
    onStart:function(){
      $('#name>h1').textillate({ in: { effect: 'fadeInUp' } });
    }
  })
  
  gsap.from("#name>h2",{
    opacity:0,
    duration:1,
    onStart:function(){
      $('#name>h2').textillate({ in: { effect: 'fadeInUp' } });
    }
  })

   

const navmenu=document.querySelector("#navmenu");
navmenu.addEventListener("click",()=>{
  navmenu.classList.toggle("active");
}); 

var flag=1;
navmenu.addEventListener("click",function(){
  document.querySelector("#main4").style.display="none";
  if(flag===1){
    document.querySelector("#main4").style.display="initial";
 flag=0;
}
else{
  flag=1;
}
});

// const cursor = document.querySelector('.cursor')
// document.addEventListener('mousemove', (e) => {
//  cursor.style.left = e.pageX + 'px';
//  cursor.style.top = e.pageY + 'px';
// })






















