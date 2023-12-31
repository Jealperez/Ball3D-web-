const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount= 179;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.jpg`
const images = [];
let ball={frame:0};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
    
}

gsap.to(ball,{
    frame: frameCount-1,
    snap:"frame",
    ease:"none",
    scrollTrigger:{
        scrub:true,
        pin:"canvas",
        end:"500%",
    },
    onUpdate: render, 
});

gsap.fromTo(".ball-text",{opacity:0},{opacity:1, scrollTrigger:{
    scrub: true,
    start:"50%",
    end:"60%",

},
onComplete:() => {
    gsap.to(".ball-text",{opacity:0});
},
}
);

gsap.fromTo(".button-78",{opacity:0},{opacity:1, scrollTrigger:{
    scrub: true,
    start:"73%",
    

},
onComplete:() => {
    gsap.to(".ball-text",{opacity:0});
},
}
);

gsap.fromTo(".btn",{opacity:1},{opacity:0, scrollTrigger:{
    scrub: true,
    end:"10%"
    

    
},
onComplete:() => {
    gsap.to(".btn",{opacity:0});
},
}
);

gsap.fromTo(".texto",{opacity:0},{opacity:1, scrollTrigger:{
    scrub: true,
    start:"82%",
    

},
}
);

gsap.fromTo(".texto2",{opacity:0},{opacity:1, scrollTrigger:{
    scrub: true,
    start:"82%",
    

},
}
);

gsap.fromTo(".texto3",{opacity:0},{opacity:1, scrollTrigger:{
    scrub: true,
    start:"82%",
    

},
}
);

images [0].onload = render;

function render(){
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(images[ball.frame], 0 , 0);
}