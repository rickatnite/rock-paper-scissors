let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
    let hChoice = prompt("Type rock, paper, or scissors to play!").toLowerCase();
    console.log("Player: " + hChoice);
    return hChoice;
}

function playGame() {
    let i;
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let compChoice = getCompChoice();
        playRound(humanChoice, compChoice);
        console.log("Your Score: " + humanScore + "  ||  " + "Computer Score: " + computerScore);
    }
    function playRound(humanChoice, compChoice) {
        if (humanChoice === "rock" && compChoice === "paper") {
            computerScore++;
            console.log("You Lose! Paper Beats Rock");
            return;
        } else if (humanChoice === "rock" && compChoice === "scissors") {
            humanScore++;
            console.log("You Win! Rock Beats Scissors");
            return;
        } else if (humanChoice === "scissors" && compChoice === "paper") {
            humanScore++;
            console.log("You Win! Scissors Beats Paper");
            return;
        } else if (humanChoice === "scissors" && compChoice === "rock") {
            computerScore++;
            console.log("You Lose! Rock Beats Scissors");
            return;
        } else if (humanChoice === "paper" && compChoice === "rock") {
            humanScore++;
            console.log("You Win! Paper Beats Rock");
            return;
        } else if (humanChoice === "paper" && compChoice === "scissors") {
            computerScore++;
            console.log("You Lose! Scissors Beats Paper");
            return;
        } else if (humanChoice === compChoice) {
            console.log("It's A Tie! Go Again");
            return;
        }
        console.log("Player: " + humanChoice);
        console.log("Computer: " + compChoice);
    }
        if (humanScore === computerScore) {
            console.log("It's a tie!");
        } else if (humanScore > computerScore) {
            console.log("You win!");
        } else (console.log("You lose!"));
        alert("Game over!");
        alert("Your Score: " + humanScore + "  ||  " + "Computer Score: " + computerScore);
}

playGame();

