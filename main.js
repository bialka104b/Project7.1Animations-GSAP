
const ball_1 = document.querySelector(".ball_1");
const ball_2 = document.querySelector(".ball_2");
const height = window.innerHeight - 150;

TweenMax.from(ball_1, 5, {x:0, repeat: -1, yoyo:true, ease: "elastic.out(1, 0.3)"});//z jakiego miejsca ma być wykonywana animacja. Miejsce docelowe jest ustawione w css

TweenMax.fromTo(ball_2, 2, {y:100, backgroundColor: 'olive', delay:5}, {y:300} )

//yoyo oznacza tyle co "alternate" w css czyli animacja wykona sie w dwie strony
//repeat:-1 to inaczej "infinite" w css
//x to jest nasz transform:translateX()
//y to jest nasz transform: translateY()
//scale to zmniejszanie naszej piłki