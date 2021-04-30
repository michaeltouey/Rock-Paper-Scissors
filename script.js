var ties = 0;
var wins = 0;
var losses = 0;

var choices = ["R", "P", "S"];



var playGame = function() {

var humanSelection = window.prompt("Please select R, P, or S");

// end game if they hit cancel
if(!humanSelection) {
    return;
}

humanSelection = humanSelection.toUpperCase();



var index = Math.floor(Math.random() * choices.length)
var compSelection = choices[index];

// show computers choice
window.alert("The computer chose " + compSelection)

if (humanSelection === compSelection) {
  ties++;
  window.alert("Its a tie")

} else if  (
      (humanSelection === "R" && compSelection === "S") ||
      (humanSelection === "S" && compSelection === "P") ||
      (humanSelection === "P" && compSelection === "R") 
      ){
        wins++;
        window.alert("You win!");
} else {
    losses++;    
    window.alert("You lost!");
} 


// See if player wants to play again
var playAgain = confirm("Would you like to play again?")

if(playAgain) {
playGame();
}
}

playGame();



