const ball_1 = document.querySelector(".ball_1");
const ball_2 = document.querySelector(".ball_2");
const height = window.innerHeight - 150;

TweenMax.staggerFrom(
  "div",
  1,
  {
    x: 130,
    opacity: 0,
    delay: 1, //opóźnienie
    border: "2px solid black",
  },
  0.5,
);
TweenMax.set(
    'div',
    {
        visibility: "visible"
    }
);

//yoyo oznacza tyle co "alternate" w css czyli animacja wykona sie w dwie strony
//repeat:-1 to inaczej "infinite" w css
//x to jest nasz transform:translateX()
//y to jest nasz transform: translateY()
//scale to zmniejszanie naszej piłki
