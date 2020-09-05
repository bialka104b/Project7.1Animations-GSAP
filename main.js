const rectangle = document.querySelector(".rectangle");
const button = document.querySelector("button");

let timeLine = new TimelineMax({
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  onStart: () => console.log("vsvsvsvs"),
  //onComplete:()=> alert("onComplete"),
  paused: true,
  delay: 0,
});
timeLine
  .to(rectangle, 1, { x: "+=200" })
  .to(rectangle, 1, { y: "+=200" })
  .add("change")
  .to(rectangle, 1, { x: "-=200" })
  .to(rectangle, 1, { y: 0 })
  .to(rectangle, 3, { backgroundColor: "yellow" }, "change"); //w miejscu change zacznij animacje

button.addEventListener("click", () => {
  if (timeLine.paused) {
    //_paused właściwośc timeLine
    timeLine.resume(); //uruchomienie animacji, ustawienie paused na false
  }
});
