let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    const computerSelectionIndex = Math.floor(Math.random() * options.length) + 1
    const computerSelection = options[computerSelectionIndex - 1]

    return computerSelection
}

function getHumanChoice() {
    const humanSelection = prompt('Type rock, paper, or scissors').trim().toLowerCase()

    return humanSelection
}

function playRound(humanGuess, computerGuess) {
    if (humanGuess === 'rock') {
        if (computerGuess === 'paper') {
            computerScore += 1
            return 'Computer Wins! They chose paper'
        } else if (computerGuess === 'scissors') {
            humanScore += 1
            return 'You win! They chose scissors'
        } else {
            return 'It is a tie!'
        }
    } else if (humanGuess === 'paper') {
        if (computerGuess === 'scissors') {
            computerScore += 1
            return "Computer Wins! They chose scissors"
        } else if (computerGuess === 'rock') {
            humanScore += 1
            return 'You Win! They selected rock'
        } else {
            return 'It is a tie!'
        }
    } else if (humanGuess === 'scissors') {
        if (computerGuess === 'rock') {
            computerScore += 1
            return 'Computer Wins! They chose rock'
        } else if (computerGuess === 'paper') {
            humanScore += 1
            return 'You Win! They selected paper'
        } else {
            return 'It is a tie!'
        }
    }
}

const roundOutcome = playRound(getHumanChoice(), getComputerChoice())

console.log(`${roundOutcome} Human score: ${humanScore} Computer score: ${computerScore}`);
