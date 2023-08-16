console.log("Hello World");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max + 1);
  return Math.floor(Math.random() * (max - min) + min);
}
function getComputerChoice() {
  let computerChoise = getRandomInt(1, 3);
  if (computerChoise === 1) {
    return "rock";
  } else if (computerChoise === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "lose";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "win";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "win";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "lose";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "win";
  } else {
    return "ERROR";
  }
}
const playerScoreText = document.querySelector(".player");
const computerScoreText = document.querySelector(".computer");
let playerScore = 0;
let computerScore = 0;
//Funcion que muetra el resuldato de una ronda agregando un div
function showRound(round) {
  let result = "";
  if (round === "tie") {
    result = "TIE";
  } else if (round === "win") {
    result = "WIN";
    playerScore++;
  } else if (round === "lose") {
    result = "LOSE";
    computerScore++;
  }
  const roundResultH2 = document.querySelector(".round h2");
  roundResultH2.textContent = result;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}
//Funcion despliega un mensaje en la pantalla con primero en llegar a 5 puntos

function showWinner() {
  let end = false;
  if (playerScore === 5) {
    alert("YOU WIN!");
    end = true;
  } else if (computerScore === 5) {
    alert("YOU LOSE!");
    end = true;
  }
  return end;
}

function showWinnerPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = message;
  popup.style.display = "block";

  const closeBtn = document.getElementById("close");
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    resetScores();
  });
}
function resetScores() {
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

const optionButtons = document.querySelectorAll(".option");
optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.querySelector("button").textContent;
    let round = playRound(choice, getComputerChoice());
    showRound(round);
    if (playerScore === 5 || computerScore === 5) {
      if (playerScore === 5) {
        showWinnerPopup("YOU WIN!");
      } else {
        showWinnerPopup("YOU LOSE!");
      }
    }
  });
});
