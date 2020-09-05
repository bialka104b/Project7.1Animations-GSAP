
const ball = document.querySelector(".ball");
const height = window.innerHeight - 150;

TweenMax.to(ball, 5, {y:height, ease: "bounce.out"});
TweenMax.to(ball, 2, {backgroundColor: 'olive', scale:0.2, delay:5} )
//y to jest nasz transform: translate-Y
//scale to zmniejszanie naszej piłki