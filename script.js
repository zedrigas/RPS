document.addEventListener('DOMContentLoaded', () => {

    const signs = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * signs.length);
        return signs[randomIndex];
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        let result;

        if (humanChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'rock')
        ) {
            computerScore++;
            result = 'Computer wins this round!';
        } else {
            humanScore++;
            result = 'Human wins this round!';
        }

        // Display the results
        const textContainer = document.querySelector('.text-container');

        const humanChoicePara = document.createElement('p');
        humanChoicePara.textContent = `Human choice: ${humanChoice}`;
        textContainer.appendChild(humanChoicePara);

        const computerChoicePara = document.createElement('p');
        computerChoicePara.textContent = `Computer choice: ${computerChoice}`;
        textContainer.appendChild(computerChoicePara);

        const resultPara = document.createElement('p');
        resultPara.textContent = `Result: ${result}`;
        textContainer.appendChild(resultPara);

        const scoreContainer = document.querySelector('.score-container');
        scoreContainer.innerHTML = `Human: ${humanScore} - Computer: ${computerScore}`;

        const separator = document.createElement('hr');
        textContainer.appendChild(separator);

        console.log(`Human picked: ${humanChoice}`);
        console.log(`Computer picked: ${computerChoice}`);

        // Check for a winner
        if (humanScore === 5 || computerScore === 5) {
            const winnerContainer = document.querySelector('.winner-container');
            const winner = humanScore === 5 ? 'Human' : 'Computer';
            winnerContainer.textContent = `Winner: ${winner}`;

            // Disable buttons to prevent further play
            document.querySelector('.rock-btn').disabled = true;
            document.querySelector('.paper-btn').disabled = true;
            document.querySelector('.scissors-btn').disabled = true;
        }

        return {
            humanScore,
            computerScore
        };
    }

    // Select buttons correctly with querySelector
    const rockBtn = document.querySelector('.rock-btn');
    const paperBtn = document.querySelector('.paper-btn');
    const scissorsBtn = document.querySelector('.scissors-btn');

    // Add event listeners to buttons
    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));
});
