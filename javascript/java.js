document.getElementById("submit").addEventListener("click", onSubmit);
document.getElementById("clear").addEventListener("click", clear);

document.getElementById('name').addEventListener("click", (e) => {
  e.preventDefault();
  let your = document.querySelector('#your');
  let f = document.querySelector('#form');
  your.innerText = f.value + " Score";
});

var scoreHuman = document.getElementById("humanScore");
var scoreComputer = document.getElementById("computerScore");

function getRadioValue() {
  var inputs = document.getElementsByName("option");

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return inputs[i].value;
    }
  }
};

let pScore = 0;
let cScore = 0;

function onSubmit() {

  var Selections = ["Rock", "Paper", "Scissors"];
  var humanGuess = getRadioValue();
  var computerGuess = Selections[Math.floor(Math.random() * 3)];

  if (hasPlayerWon() == "win") {
    console.log("win");
    clear();
  } else if (hasPlayerWon() == "lose") {
    console.log("lose");
    clear();
  }

  document.getElementById("humanResult").innerHTML = humanGuess;
  document.getElementById("computerResult").innerHTML = computerGuess;

  if (humanGuess === computerGuess) {
    document.getElementById("result").innerHTML = "DRAW"
  }
  if (humanGuess === "Rock") {
    if (computerGuess === "Scissors") {
      document.getElementById("result").innerHTML = "YOU WIN";
      pScore++;
    } else {
      if (computerGuess === "Paper") {
        document.getElementById("result").innerHTML = "YOU LOSE";
        cScore++;
      }
    }
  }
  if (humanGuess === "Scissors") {
    if (computerGuess === "Paper") {
      document.getElementById("result").innerHTML = "YOU WIN";
      pScore++;
    } else {
      if (computerGuess === "Rock") {
        document.getElementById("result").innerHTML = "YOU LOSE"
        cScore++;
      }
    }
  }
  if (humanGuess === "Paper") {
    if (computerGuess === "Rock") {
      document.getElementById("result").innerHTML = "YOU WIN"
      pScore++;
    } else {
      if (computerGuess === "Scissors") {
        document.getElementById("result").innerHTML = "YOU LOSE";
        cScore++;
      }
    }
  }
  scoreHuman.innerHTML = pScore;
  scoreComputer.innerHTML = cScore;

};

function hasPlayerWon() {
  if (pScore >= 3) return "win"; else if (cScore >= 3) return "lose";
}

function clear() {
  pScore = cScore = 0;
  document.getElementById('humanResult').innerHTML = "";
  document.getElementById('computerResult').innerHTML = "";
  document.getElementById('result').innerHTML = "";
  document.getElementById('humanScore').innerHTML = "0";
  document.getElementById('computerScore').innerHTML = "0";
};
function display() {
  console.log('name')
  document.getElementById("name").innerHTML = document.getElementById("name").value;
}