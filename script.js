function getComputerChoice(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const number = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  );

  let computerChoice = "";

  if (number == 1) {
    computerChoice = "Pedra";
  } else if (number == 2) {
    computerChoice = "Papel";
  } else {
    computerChoice = "Tesoura";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Your choice: ").toLowerCase();
  let choiceToNumber = 0;

  if (humanChoice == "pedra") {
    choiceToNumber = 1;
  } else if (humanChoice == "papel") {
    choiceToNumber = 2;
  } else {
    choiceToNumber = 3;
  }

  return humanChoice;
}

let humanScore,
  computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(1, 3);

function playRound(humanChoice, computerChoice) {
  if (humanSelection > computerSelection) {
    humanScore += 1;
    console.log(
      `Você venceu! ${humanChoice} vence ${computerChoice}!! Placar: Você: ${humanScore} - ${computerScore} Máquina`
    );
  } else {
    computerScore += 1;
    console.log(
      `A máquina venceu! ${computerChoice} vence ${humanChoice}!! Placar: Você: ${humanScore} - ${computerScore} Máquina`
    );
  }
}

playRound();
