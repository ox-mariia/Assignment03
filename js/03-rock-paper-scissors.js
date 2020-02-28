function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let compChoice = getRndInteger(1, 4);
  if (compChoice === 1) {
      compChoice = "rock";
  } else if (compChoice === 2) {
      compChoice = "paper";
  } else {
      compChoice = "scissors";
  }
// alert("Computer choice is " + compChoice);

while(true) {
    userChoice = prompt("Enter rock, paper, or scissors to start the game!");
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        break;
    }
}

function Game(compChoice, userChoice) {
    if (userChoice === compChoice) {
        window.document.write("You and Computer made the same choice - " + userChoice + "! WOW!<br>")
    } else {
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                window.document.write("You lost! Paper covers rock.<br>")
            } else {
                window.document.write("You won! Rock destroys scissors.<br>")
            }
        } else if (userChoice === "paper") {
            if (compChoice === "rock") {
                window.document.write("You won! Paper covers rock.<br>")
            } else {
                window.document.write("You lost! Scissors cut paper.<br>")
            }
        } else if (userChoice === "scissors") {
            if (compChoice === "rock") {
                window.document.write("You lost! Rock destroys scissors.<br>")
            } else {
                window.document.write("You won! Scissors cut paper.<br>")
            }
        }
    }
}
Game(compChoice, userChoice);
window.document.write("Computer chose " + compChoice + ".<br>");
window.document.write("You chose " + userChoice + ".");
            
