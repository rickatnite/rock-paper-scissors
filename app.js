// create buttons
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

// create div to display results 
const resultsDiv = document.createElement("div");

// append buttons to the body
const body = document.querySelector("body");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

// add event listeners for the buttons
rockButton.addEventListener("click", () => {
    playRound("rock", getCompChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getCompChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getCompChoice());
});
resetButton.addEventListener("click", () => {
    resetGame();
});

// declare score variables
let playerScore = 0;
let computerScore = 0;

// create and append scoring elements
const displayResult = document.createElement("div");
const displayScore = document.createElement("div");
displayScore.textContent = ("Player: " + playerScore + "  ||  Computer: " + computerScore);
body.appendChild(displayScore);

// declare function to get computer choice
function getCompChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let cChoice = "";
    if (computerChoice === 0) {
        cChoice = "rock";
    } else if (computerChoice === 1) {
        cChoice = "paper";
    } else if (computerChoice === 2) {
        cChoice = "scissors";
    }
    console.log("Computer: " + cChoice);
    return cChoice;
}

// declare function to play one round, increment scores, display and append results
function playRound(humanChoice, compChoice) {
    if (humanChoice === "rock" && compChoice === "paper") {
        body.appendChild(displayResult);
        displayResult.textContent = "You Lose! Paper Beats Rock";
        computerScore++;
        displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    } else if (humanChoice === "rock" && compChoice === "scissors") {
        body.appendChild(displayResult);
        displayResult.textContent = "You Win! Rock Beats Scissors";
        playerScore++;
        displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    } else if (humanChoice === "scissors" && compChoice === "paper") {
        body.appendChild(displayResult);
        displayResult.textContent = "You Win! Scissors Beats Paper";
        playerScore++;
        displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    } else if (humanChoice === "scissors" && compChoice === "rock") {
        body.appendChild(displayResult);
        displayResult.textContent = "You Lose! Rock Beats Scissors";
        computerScore++;
        displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    } else if (humanChoice === "paper" && compChoice === "rock") {
        body.appendChild(displayResult);
        displayResult.textContent = "You Win! Paper Beats Rock";
        playerScore++;
        displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    } else if (humanChoice === "paper" && compChoice === "scissors") {
        body.appendChild(displayResult);
        displayResult.textContent = "You Lose! Scissors Beats Paper";
        computerScore++;
        displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    } else if (humanChoice === compChoice) {
        body.appendChild(displayResult);
        displayResult.textContent = "It's A Tie! Go Again";
    }

    // check to see if either player has reached five wins
    if (playerScore === 5 || computerScore === 5) {
        // disable buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        // append reset button and results
        body.appendChild(resetButton);
        body.appendChild(resultsDiv);

        // determine winner in results div
        if (playerScore === 5) {
            resultsDiv.textContent = "You won! Nice!";
        } else {
            resultsDiv.textContent = "You lost! Dang...";
        }
    }
}

// declare function to reset the game and clear out variables
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayScore.textContent = "Player: " + playerScore + "  ||  Computer: " + computerScore;
    displayResult.textContent = "";
    resultsDiv.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.remove();
}

