let continueGame = true
let iterations = 0
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissors')
const results = document.querySelector('.results')

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    const computerSelectionIndex = Math.floor(Math.random() * options.length) + 1
    const computerSelection = options[computerSelectionIndex - 1]

    return computerSelection
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
            return 'It is a tie'
        }
    } else if (humanGuess === 'paper') {
        if (computerGuess === 'scissors') {
            computerScore += 1
            return "Computer Wins! They chose scissors"
        } else if (computerGuess === 'rock') {
            humanScore += 1
            return 'You Win! They selected rock'
        } else {
            return 'It is a tie'
        }
    } else if (humanGuess === 'scissors') {
        if (computerGuess === 'rock') {
            computerScore += 1
            return 'Computer Wins! They chose rock'
        } else if (computerGuess === 'paper') {
            humanScore += 1
            return 'You Win! They selected paper'
        } else {
            return 'It is a tie'
        }
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    console.log("Paper, Scissors, Rock best of 5 ")

    while (continueGame) {


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

rockBtn.addEventListener('click', function (e) {
    const outcome = playRound(e.target.className, getComputerChoice())
    results.innerHTML = `<p class="results">${outcome}</p>`
    results.innerHTML += `<p>You: ${humanScore} | Computer: ${computerScore}</p>`
})

paperBtn.addEventListener('click', function (e) {
    const outcome = playRound(e.target.className, getComputerChoice())
    results.innerHTML = `<p class="results">${outcome}</p>`
    results.innerHTML += `<p>You: ${humanScore} | Computer: ${computerScore}</p>`
})

scissorBtn.addEventListener('click', function (e) {
    const outcome = playRound(e.target.className, getComputerChoice())
    results.innerHTML = `<p class="results">${outcome}</p>`
    results.innerHTML += `<p>You: ${humanScore} | Computer: ${computerScore}</p>`
})

// playGame()