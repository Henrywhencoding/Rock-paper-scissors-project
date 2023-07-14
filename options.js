// Create an array of options.
let options = ["rock", "paper", "scissors"];

// Function to generate a random option for the computer.
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// Function to play a single round.
function playRound(playerSelection, computerSelection) {
  // Convert player input to lowercase.
  playerSelection = playerSelection.toLowerCase();

  // Determine the winner of the round.
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "You win!";
  } else {
    return "You lose! Paper beats Rock";
  }
}

// Function to play the game.
function game() {
  // Play 5 rounds of the game.
  for (var i = 0; i < 5; i++) {
    // Get player input.
    let playerSelection = prompt("Choose rock, paper, or scissors:");

    // Get computer selection.
    let computerSelection = getComputerChoice();

    // Play a single round.
    let result = playRound(playerSelection, computerSelection);

    // Display the result.
    alert(result);
  }
}

// Call the game function to start the game.
game();