// Animation Timelines

let allRonds = document.querySelectorAll('.rond');
let allBoxes = document.querySelectorAll('.box');
// console.log(allRonds)

const controller = new ScrollMagic.Controller();

allBoxes.forEach(box => {

    for(let i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') == box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.6});

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }
        

    }
    
});