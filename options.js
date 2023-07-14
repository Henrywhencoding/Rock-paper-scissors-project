
let options = ["rock", "paper", "scissors"];


function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  
  playerSelection = playerSelection.toLowerCase();

  
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


function game() {
  
  for (var i = 0; i < 5; i++) {
    
    let playerSelection = prompt("Choose rock, paper, or scissors:");

    
    let computerSelection = getComputerChoice();

    
    let result = playRound(playerSelection, computerSelection);

    
    alert(result);
  }
}

game();