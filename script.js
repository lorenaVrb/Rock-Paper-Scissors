const display = document.getElementById("result");
const body = document.querySelector("body")
const score = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

function getComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  let computerMoveDisplay = document.querySelector(".computer-move");

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
    computerMoveDisplay.innerHTML = '<i class="fa-solid fa-hand-fist fa-2xl"></i>'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
    computerMoveDisplay.innerHTML = '<i class="fa-solid fa-hand fa-2xl"></i>'
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
    computerMoveDisplay.innerHTML = '<i class="fa-solid fa-hand-peace fa-2xl"></i>'
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = getComputerMove();
  let result = "";
  let scoreBox = document.querySelector("#score")
  let playerMoveDisplay = document.querySelector(".player-move")

  if (playerMove === "rock") {
    playerMoveDisplay.innerHTML = '<i class="fa-solid fa-hand-fist fa-2xl"></i>';

    if (computerMove === "rock") {
      result = "It's a tie!";
      body.style.backgroundColor = "#08012a";
    } else if (computerMove === "paper") {
      result = "You lose.";
      body.style.backgroundColor = "red";
    } else if (computerMove === "scissors") {
      result = `You win!`;
      body.style.backgroundColor = "green";
    }
    display.innerHTML = `${result}`;
  } else if (playerMove === "paper") {
    playerMoveDisplay.innerHTML = '<i class="fa-solid fa-hand fa-2xl"></i>'

    if (computerMove === "rock") {
      result = "You win!";
      body.style.backgroundColor = "green";
    } else if (computerMove === "paper") {
      result = "It's a tie!";
      body.style.backgroundColor = "#08012a";
    } else if (computerMove === "scissors") {
      result = "You lose.";
      body.style.backgroundColor = "red";
    }
    display.innerText = `${result}`;
  } else if (playerMove === "scissors") {
    playerMoveDisplay.innerHTML = '<i class="fa-solid fa-hand-peace fa-2xl"></i>'

    if (computerMove === "rock") {
      result = "You lose.";
      body.style.backgroundColor = "red";
    } else if (computerMove === "paper") {
      result = "You win!";
      body.style.backgroundColor = "green";
    } else if (computerMove === "scissors") {
      result = "It's a tie!";
      body.style.backgroundColor = "#08012a";
    }
    display.innerHTML = `${result}`;
  }
  if (result === "You win!") {
    score.Wins += 1;
  } else if (result === "You lose.") {
    score.Losses += 1;
  } else if (result === "It's a tie!") {
    score.Ties += 1
  }
  scoreBox.innerHTML = `Wins: ${score.Wins.valueOf()}, Losses: ${score.Losses.valueOf()}, Ties: ${score.Ties.valueOf()}`;
}
