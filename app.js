// use prompt() to get input from the user
// function playRound() - two params playerSelection and computerSelection
// playRound should return a string that declares winner "You Lose! Paper beats Rock"
// make the user input case-insensitive so it accepts any variation of choice
// function game() - use the playRound() function INSIDE to play a 5 round game that keeps score and reports the winner and loser
// either call playRound() 5 times or use a loop to repeat function call 5 times
// use console.log to display results after each round and winner at the end
// use helper functions or rework functions if needed





const rock = 0;
const paper = 1;
const scissors = 2;


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function game() {
    // code here
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's A Tie! Go Again")
    } else if (playerSelection === rock && computerSelection === paper) {
        console.log("You Lose! Paper Beats Rock")
    } else if (playerSelection === rock && computerSelection === scissors) {
        console.log("You Win! Rock Beats Scissors")
    } else if (playerSelection === scissors && computerSelection === paper) {
        console.log("You Win! Scissors Beats Paper")
    } else if (playerSelection === scissors && computerSelection === rock) {
        console.log("You Lose! Rock Beats Scissors")
    } else if (playerSelection === paper && computerSelection === rock) {
        console.log("You Win! Paper Beats Rock")
    } else if (playerSelection === paper && computerSelection === scissors) {
        console.log("You Lose! Scissors Beats Paper")
    }

}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

