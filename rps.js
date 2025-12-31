let humanScore = 0;
let computerScore = 0;
let gameover = false;

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

const divResult = document.getElementById("result");
const divScore = document.getElementById("score");

const resultText = document.createElement("p");
const scoreText = document.createElement("p");

divResult.appendChild(resultText);
divScore.appendChild(scoreText);

btnRock.addEventListener("click", () => handleClick("rock"));
btnPaper.addEventListener("click", () => handleClick("paper"));
btnScissors.addEventListener("click", () => handleClick("scissors"));

function handleClick(humanChoice) {
  if (gameover) return;

  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateScore();
  checkWinner();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultText.textContent = `It's a Tie! You both picked ${humanChoice}`;
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock");

  if (humanWins) {
    humanScore++;
    resultText.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultText.textContent = `You Lost! ${computerChoice} beats ${humanChoice}`;
  }
}

function updateScore() {
  scoreText.textContent = `Human: ${humanScore}  Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5) {
    resultText.textContent = "Human Wins!";
    gameover = true;
  } else if (computerScore === 5) {
    resultText.textContent = "Computer Wins!";
    gameover = true;
  }
}
