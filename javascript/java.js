const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
    userChoice = e.target.textContent
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if ( randomNumber === 1){
        computerChoice = 'Sten'
    }
    if (randomNumber === 2){
        computerChoice = 'Sax'
    }
    if (randomNumber === 3){
        computerChoice = 'Påse'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if (computerChoice === userChoice){
        result = 'its equal!'
    }
    if (computerChoice === 'Sten' && userChoice === "Påse"){
        result = 'you win!'
    }
    if (computerChoice === 'Sten' && userChoice === "Sax"){
        result = 'you lost!'
    }
    if (computerChoice === 'Påse' && userChoice === "Sax"){
        result = 'you win!'
    }
    if (computerChoice === 'Påse' && userChoice === "Sten"){
        result = 'you lost!'
    }
    if (computerChoice === 'Sax' && userChoice === "Sten"){
        result = 'you win!'
    
    }
    if (computerChoice === 'Sax' && userChoice === "Påse"){
        result = 'you lost!'
    
    }


    resultDisplay.innerHTML = result
}