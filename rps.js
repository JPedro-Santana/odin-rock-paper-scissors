function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return computerChoice = "rock";
  } else if (randomNumber === 1) {
    return computerChoice = "paper";
  } else {
    return computerChoice = "scissors";
  }
}

function getHumanChoice(){
    const choose = prompt("Choose: rock, paper or scissors");
    if(choose == "rock"){
        return "rock"
    } else if(choose == "paper"){
        return "paper"
    } else if (choose == "scissors"){
        return "scissors"
    }

}
console.log(getHumanChoice())