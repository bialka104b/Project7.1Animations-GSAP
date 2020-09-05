const divs = document.querySelectorAll("div");
const ball_2 = document.querySelector(".ball_2");
const colors = () => {
  colorsList = [
    "red",
    "green",
    "blue",
    "yellow",
    "chartreuse",
    "blueviolet",
    "orange",
    "cadetblue",
    "crimson",
    "chocolate",
  ];
  const color = colorsList[Math.floor(Math.random() * 10)];//można zamiast 10 wpisać colorList.lenght
  return color;
};

TweenLite.defaultEase = Power0.easeNone;//do wartości domysnej ease przypisałam inną nową, która teraz będzie domyślna

console.log(TweenLite.defaultEase);
TweenMax.staggerTo(
  divs,
  1,
  {
    opacity: 1,
    color: colors,
  },
  2,
);
TweenMax.staggerTo(
  divs,
  0.5,
  {
    opacity: 0,
    delay: 2, //opóźnienie
  },
  2,
);

//yoyo oznacza tyle co "alternate" w css czyli animacja wykona sie w dwie strony
//repeat:-1 to inaczej "infinite" w css
//x to jest nasz transform:translateX()
//y to jest nasz transform: translateY()
//scale to zmniejszanie naszej piłki
