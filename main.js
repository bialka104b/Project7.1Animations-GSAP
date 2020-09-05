
const ball_1 = document.querySelector(".ball_1");
const ball_2 = document.querySelector(".ball_2");
const height = window.innerHeight - 150;

TweenMax.set("div", { visibility: "visible", border: "2px solid black"});
TweenMax.from(ball_1, 5, { x: 0, repeat: -1, yoyo: true, ease: "elastic.out(1, 0.3)" }); //z jakiego miejsca ma być wykonywana animacja. Miejsce docelowe jest ustawione w css

TweenMax.fromTo(ball_2, 2, { y: 100, backgroundColor: "olive", delay: 5 }, { y: 300 });

const sun_1 = document.querySelector(".sun_1");
const height = window.innerHeight - 300;
const x = (window.innerWidth - 300);
const animTime = 2;

TweenMax.to(
  sun_1,
  animTime,
  {
    x: x,
    delay: 2,
    backgroundColor:"yellow",
    boxShadow:"0px 0px 150px 10px yellow",
    ease:"sine.inOut",
    repeat: 0,
  }
);
TweenMax.to(
    sun_1,
    animTime/2,
    {
      y:-height,
      delay: 2,
      boxShadow:"1px 1px 8px 10px darkgoldenrod;",
      backgroundColor:"yellow",
      ease: "sine.out",
      yoyo:true,
      repeat: 1,
    }
  );

//yoyo oznacza tyle co "alternate" w css czyli animacja wykona sie w dwie strony
//repeat:-1 to inaczej "infinite" w css
//x to jest nasz transform:translateX()
//y to jest nasz transform: translateY()
//scale to zmniejszanie naszej piłki
