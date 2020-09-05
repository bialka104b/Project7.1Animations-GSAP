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
