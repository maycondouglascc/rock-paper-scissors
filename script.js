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

  console.log(number, computerChoice);
}

getComputerChoice(1, 3);

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

  console.log(choiceToNumber);
}

getHumanChoice();
