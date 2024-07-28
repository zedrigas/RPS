const signs = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * signs.length)
    return signs[randomIndex]
}

function getHumanChoice() {
    return prompt('What do you pick: rock, paper or scissors?').toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
    } else if (humanChoice === computerChoice) {

    } else {
        humanScore++
    }

    return {
        humanScore,
        computerScore
    }
}

function playGame(rounds) {
    for (let i = 0; i<rounds; i++) {
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        const result = playRound(humanChoice, computerChoice)
        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(result)
    }

    if (humanScore > computerScore) {
        console.log(`Player wins! Result is: Player:${humanScore} Computer:${computerScore}!`)
        }
    else if (humanScore < computerScore){
        console.log(`Computer wins! Result is: Player:${humanScore} Computer${computerScore}`)
    }
    
    else {
        console.log(`It's a tie! Result is: Player:${humanScore} Computer${computerScore}`)
    }
}

playGame(5)