const rocket = document.querySelector(".rocket");

const timeLine = new TimelineMax();
timeLine.timeScale(3);//przyśpieszanie lub zwalnianie animacji
timeLine.set(rocket, {rotation:90});
timeLine.to(rocket,3, {rotation:"-=90"});
timeLine.to(rocket,2, {y: -400, delay:2, ease: Power4.easeIn, rotation:0});
timeLine.to(rocket,1, {y: "-=100", ease: Power0.easeIn, rotation:0});
timeLine.add("stop");
timeLine.to(rocket,0.7, {rotation: "-=100", delay:0.4, ease: Power0.easeIn}, "stop");
timeLine.to(rocket,1, {y: 80, delay:0.4, ease: Power0.easeIn}, "stop");
//timeLine.to(rocket, .3, {boxShadow:"1px 1px 20px 0px red" });
timeLine.to(rocket, .3, {opacity:0});

//yoyo oznacza tyle co "alternate" w css czyli animacja wykona sie w dwie strony
//repeat:-1 to inaczej "infinite" w css
//x to jest nasz transform:translateX()
//y to jest nasz transform: translateY()
//scale to zmniejszanie naszej piłki
