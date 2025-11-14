let continueGame = true
let iterations = 0
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissors')
const results = document.querySelector('.results')
const scores = document.querySelector('.scores')

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

function getGameStatus() {
    const totalScore = humanScore + computerScore
    if (totalScore >= 5) {
        if (humanScore > computerScore) {
            results.innerHTML = `<h2>You win! </h2>`
        } else {
            results.innerHTML = `<h2>Computer wins. Try again!</h2>`
        }

        rockBtn.style.display = 'none'
        paperBtn.style.display = 'none'
        scissorBtn.style.display = 'none'

        const playAgainLink = document.createElement('a')
        playAgainLink.href = 'http://127.0.0.1:5500/index.html'
        playAgainLink.textContent = 'Play Again?'
        results.appendChild(playAgainLink)
    }
}


rockBtn.addEventListener('click', function (e) {
    const outcome = playRound(e.target.className, getComputerChoice())
    results.innerHTML = `<p class="results">${outcome}</p>`
    results.innerHTML += `<p>You: ${humanScore} | Computer: ${computerScore}</p>`
    getGameStatus()
})

paperBtn.addEventListener('click', function (e) {
    const outcome = playRound(e.target.className, getComputerChoice())
    results.innerHTML = `<p class="results">${outcome}</p>`
    results.innerHTML += `<p>You: ${humanScore} | Computer: ${computerScore}</p>`
    getGameStatus()
})

scissorBtn.addEventListener('click', function (e) {
    const outcome = playRound(e.target.className, getComputerChoice())
    results.innerHTML = `<p class="results">${outcome}</p>`
    results.innerHTML += `<p>You: ${humanScore} | Computer: ${computerScore}</p>`
    getGameStatus()
})




