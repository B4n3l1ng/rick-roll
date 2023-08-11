window.addEventListener("load", () => {
  const rick = new Audio("./assets/rick-roll.mp3");
  rick.volume = 0.7;
  const slider = document.querySelector("#volume");
  slider.addEventListener("change", (event) => {
    console.log(parseInt(event.target.value) / 10);
    rick.volume = parseInt(event.target.value) / 10;
  });
  const body = document.querySelector("#body");
  body.addEventListener("click", () => {
    rick.play();
  });
});
