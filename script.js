window.addEventListener("load", () => {
  const rick = new Audio("./assets/rick-roll.mp3");
  rick.volume = 0.7;
  const body = document.querySelector("#body");
  body.addEventListener("click", () => {
    rick.play();
  });
});
