const scissor = document.getElementById("user-scissor");
const paper = document.getElementById("user-paper");
const rock = document.getElementById("user-rock");
const selectedsymbol = document.querySelector(".selected-symbol-user");
const symbols = document.querySelector(".symbols");
const result = document.getElementById("result");
const button = document.getElementById("Playagain-button");
const newicon = document.getElementById("newicon");

scissor.addEventListener("click", () => {
  newicon.src = 'Scissor.png';
});

paper.addEventListener("click", () => {
  newicon.src = "Paper.png";
});

rock.addEventListener("click", () => {
  newicon.src = "Rock.png";
});

function disableicon() {
  symbols.style.visibility = "hidden";
  startTimer();
}

var timerSeconds = 3;
var timerInterval;

function startTimer() {
  result.innerHTML = timerSeconds;

  timerInterval = setInterval(function () {
    timerSeconds--;

    if (timerSeconds >= 0) {
      result.innerHTML = timerSeconds;
    } else {
      clearInterval(timerInterval);
      displayresult();
    }
  }, 1000);
}

function displayresult() {
  button.style.display = "block";
  pickRandomIcon();
}

function Dispnone() {
  location.reload();
}

function pickRandomIcon() {
  var icons = [
    "Rock.png",
    "Paper.png",
    "Scissor.png",
  ];
  var randomIndex = Math.floor(Math.random() * icons.length);
  var randomIconClass = icons[randomIndex];

  var randomIconElement = document.getElementById("ss-computer");
  randomIconElement.src = randomIconClass;

  if (randomIconElement.src === newicon.src) {
    result.textContent = "Tie";
    result.style.color = "Yellow";
  } else if (
    (randomIconElement.src === "Rock.png" &&
      newicon.src === "Paper.png") ||
    (randomIconElement.src === "Paper.png" &&
      newicon.src === "Scissor.png") ||
    (randomIconElement.src === "Scissor.png" &&
      newicon.src === "Rock.png")
  ) {
    result.textContent = "You Win";
    result.style.color = "Green";
  } else {
    result.textContent = "You Loss";
    result.style.color = "Red";
  }
}
