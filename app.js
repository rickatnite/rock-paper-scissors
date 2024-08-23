
let computerCount = 0;
let playerCount = 0;
let winner = "";

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

  const playerSelection = prompt("Type rock, paper, or scissors to play!").toLowerCase();
  const computerSelection = getComputerSelection();
  console.log(playRound(playerSelection, computerSelection));
  console.log("Computer: " + computerSelection);
  console.log("Player: " + playerSelection);
  console.log("Player Score: " + playerCount);
  console.log("Computer Score: " + computerCount);


  function game() {
    
 
    // while (computerCount < 5 || playerCount < 5) {
        // playRound();
        // incrementScore();
   // }
    // increment the scores somehow and add it to result of the next loop
  }

game();
console.log(computerCount);
console.log(playerCount);


