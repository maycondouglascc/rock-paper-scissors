function getComputerChoice(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const number = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  );

  let computerChoice = "";

  if (number == 1) {
    computerChoice = "pedra";
  } else if (number == 2) {
    computerChoice = "papel";
  } else {
    computerChoice = "tesoura";
  }

  return [number, computerChoice];
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

  return [choiceToNumber, humanChoice];
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(1, 3);

function playRound(humanChoice, computerChoice) {
  if (humanSelection[0] > computerSelection[0]) {
    humanScore += 1;
    console.log(
      `Você venceu! ${humanSelection[1]} vence ${computerSelection[1]}!! Placar: Você: ${humanScore} - ${computerScore} Máquina`
    );
  } else {
    computerScore += 1;
    console.log(
      `A máquina venceu! ${computerSelection[1]} vence ${humanSelection[1]}!! Placar: Você: ${humanScore} - ${computerScore} Máquina`
    );
  }
}

playRound();
