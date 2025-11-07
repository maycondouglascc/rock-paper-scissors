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
