let continueGame = true
let iterations = 0

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

function playRound(humanGuess, computerGuess, humanScore, computerScore) {


    if (humanGuess === 'rock') {
        if (computerGuess === 'paper') {
            computerScore += 1
            return { message: 'Computer Wins! They chose paper', humanScore: humanScore, computerScore: computerScore }
        } else if (computerGuess === 'scissors') {
            humanScore += 1
            return { message: 'You win! They chose scissors', humanScore: humanScore, computerScore: computerScore }
        } else {
            return { message: 'It is a tie' }
        }
    } else if (humanGuess === 'paper') {
        if (computerGuess === 'scissors') {
            computerScore += 1
            return { message: "Computer Wins! They chose scissors", humanScore: humanScore, computerScore: computerScore }
        } else if (computerGuess === 'rock') {
            humanScore += 1
            return { message: 'You Win! They selected rock', humanScore: humanScore, computerScore: computerScore }
        } else {
            return { message: 'It is a tie', humanScore: 0, computerScore: 0 }
        }
    } else if (humanGuess === 'scissors') {
        if (computerGuess === 'rock') {
            computerScore += 1
            return { message: 'Computer Wins! They chose rock', humanScore: humanScore, computerScore: computerScore }
        } else if (computerGuess === 'paper') {
            humanScore += 1
            return { message: 'You Win! They selected paper', humanScore: humanScore, computerScore: computerScore }
        } else {
            return { message: 'It is a tie', humanScore: 0, computerScore: 0 }
        }
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    console.log("Paper, Scissors, Rock best of 5 ")

    while (continueGame) {
        if (iterations === 5) {
            continueGame = false
            break
        }

        const outcome = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore)
        if (outcome['message'].includes('tie')) {
            iterations += 1
            console.log('It was a tie!');
            continue
        } else {
            humanScore = outcome['humanScore']
            computerScore = outcome['computerScore']
        }

        console.log(outcome['message']);
        iterations += 1

    }

    if (humanScore > computerScore) {
        console.log(`You win! Score : You: ${humanScore} Computer: ${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`You lose! Score : You: ${humanScore} Computer: ${computerScore}`);
    } else {
        console.log(`It was a tie game: Score : You: ${humanScore} Computer: ${computerScore}`);

    }

}

playGame()