document.getElementById("submit").addEventListener("click", onSubmit);
document.getElementById("clear").addEventListener("click", clear);

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

function onSubmit() {

  var Selections = ["Rock", "Paper", "Scissors"];
  var humanGuess = getRadioValue();
  var computerGuess =  Selections[Math.floor(Math.random() * 3)];
  
  document.getElementById("humanResult").innerHTML = humanGuess;
  document.getElementById("computerResult").innerHTML = computerGuess;

    if ( humanGuess === computerGuess ){
          document.getElementById("result").innerHTML = "DRAW"
    }
    if (humanGuess === "Rock") {
        if (computerGuess === "Scissors") {
          document.getElementById("result").innerHTML = "YOU WIN"
          scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1; 
        } else {
          if (computerGuess === "Paper") {
            document.getElementById("result").innerHTML = "YOU LOSE"
            scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          }
        }
    }
    if (humanGuess === "Scissors") {
        if (computerGuess === "Paper") {
          document.getElementById("result").innerHTML = "YOU WIN"
          scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1; 
        } else {
          if (computerGuess === "Rock") {
            document.getElementById("result").innerHTML = "YOU LOSE"
             scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          }
        }
    }
    if (humanGuess === "Paper") {
        if (computerGuess === "Rock") {
          document.getElementById("result").innerHTML = "YOU WIN"
          scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1; 
        } else {
          if (computerGuess === "Scissors") {
            document.getElementById("result").innerHTML = "YOU LOSE"
             scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          }
        }
   }
  };

function clear() {
  document.getElementById('humanResult').innerHTML = "";
  document.getElementById('computerResult').innerHTML = "";
  document.getElementById('result').innerHTML = "";
  document.getElementById('humanScore').innerHTML = "0";
  document.getElementById('computerScore').innerHTML = "0";
};
function display(){
    console.log('name')
    document.getElementById("name").innerHTML =document.getElementById("name").value;		
}