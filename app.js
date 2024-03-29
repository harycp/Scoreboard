const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");

const resetButton = document.querySelector("#reset");

const winPointOption = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;

let winPoint = 3;
let isStillPlay = "true";

p1Button.addEventListener("click", () => {
  if (isStillPlay === "true") {
    p1Score += 1;
    if (p1Score === winPoint) {
      isStillPlay = "false";
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (isStillPlay === "true") {
    p2Score += 1;
    if (p2Score === winPoint) {
      isStillPlay = "false";
    }
    p2Display.textContent = p2Score;
  }
});

function reset() {
  isStillPlay = "true";
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

resetButton.addEventListener("click", reset);

winPointOption.addEventListener("change", () => {
  winPoint = parseInt(winPointOption.value);
  reset();
});
