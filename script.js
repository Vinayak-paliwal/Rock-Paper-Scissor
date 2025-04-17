const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const message = document.querySelector(".message");
const options = document.querySelectorAll(".options button");

const choices = ["STONE", "PAPER", "SCISSORS"];

const results = {
  STONE: { STONE: "draw", PAPER: "computer", SCISSORS: "player" },
  PAPER: { STONE: "player", PAPER: "draw", SCISSORS: "computer" },
  SCISSORS: { STONE: "computer", PAPER: "player", SCISSORS: "draw" }
};

options.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.textContent;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    player.classList.add("shake");
    computer.classList.add("shake");

    setTimeout(() => {
      player.classList.remove("shake");
      computer.classList.remove("shake");

      player.src = `${playerChoice.toLowerCase()}Player.png`;
      computer.src = `${computerChoice.toLowerCase()}Computer.png`;

      const outcome = results[playerChoice][computerChoice];

      if (outcome === "player") {
        playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
        message.textContent = "You win this round!";
      } else if (outcome === "computer") {
        computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
        message.textContent = "Computer wins this round!";
      } else {
        message.textContent = "It's a draw!";
      }
    }, 800);
  });
});
