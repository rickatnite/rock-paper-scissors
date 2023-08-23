// use prompt() to get input from the user
// function playRound() - two params playerSelection and computerSelection
// playRound should return a string that declares winner "You Lose! Paper beats Rock"
// make the user input case-insensitive so it accepts any variation of choice
// function game() - use the playRound() function INSIDE to play a 5 round game that keeps score and reports the winner and loser
// either call playRound() 5 times or use a loop to repeat function call 5 times
// use console.log to display results after each round and winner at the end
// use helper functions or rework functions if needed





// const rock = 0;
// const paper = 1;
// const scissors = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let compChoice = getComputerChoice();

function getComputerSelection() {
    if (compChoice === 0) {
        return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else if (compChoice === 2) {
        return "scissors";
    }
}

let computerCount = 0;
let playerCount = 0;
let winner = "";

//change this to switch case?
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's A Tie! Go Again")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        // computerCount++;
        winner = "Computer";
        console.log("You Lose! Paper Beats Rock")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // playerCount++;
        winner = "You";
        console.log("You Win! Rock Beats Scissors")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // playerCount++;
        winner = "You";
        console.log("You Win! Scissors Beats Paper")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // computerCount++;
        winner = "Computer";
        console.log("You Lose! Rock Beats Scissors")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // playerCount++;
        winner = "You";
        console.log("You Win! Paper Beats Rock")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        // computerCount++;
        winner = "Computer";
        console.log("You Lose! Scissors Beats Paper")
    }
    return winner;
    // incrementScore();
    // return what? how will it be used to increment score?
}

function incrementScore() {
    if (winner === "Computer") {
        computerCount++;
    } else if (winner === "You") {
        playerCount++;
    }
}

  let playerSelection = prompt("Type rock, paper, or scissors to play!").toLowerCase();
  let computerSelection = getComputerSelection();
  console.log(playRound(playerSelection, computerSelection));
  console.log("Computer: " + computerSelection);
  console.log("Player: " + playerSelection);
  console.log("Player Score: " + playerCount);
  console.log("Computer Score: " + computerCount);


  function game() {
    while (computerCount < 5 || playerCount < 5) {
        playRound();
        incrementScore();
    }
    // increment the scores somehow and add it to result of the next loop
  }


  