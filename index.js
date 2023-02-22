const choices = ["rock","paper","scissor"];
const drawMessage = "It's a draw";
const winMessage = "You win!";
const loseMessage = "You lose :(";
const invalidMessage = "Invalid Input";

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random()*3);
    return choices[choiceIndex];
}

function playRound(playerSelection,computerSelection) {
    console.log("Player chose: "+ playerSelection +"\nComputer chose: "+ computerSelection);
    if(playerSelection == computerSelection) {
        return drawMessage;
    }
    if( (playerSelection == choices[0] && computerSelection == choices[2]) || 
        (playerSelection == choices[1] && computerSelection == choices[0]) ||
        (playerSelection == choices[2] && computerSelection == choices[1])){
        return winMessage;
    }
    return loseMessage;
}

function isValidSelection(playerSelection) {
    if(playerSelection == null)
        return false;
    playerSelection = playerSelection.toLowerCase();
    for(let i = 0;i<3;i++) {
        if(choices[i]==playerSelection)
            return true;
    }
    return false;
}

function game(){
    for(let i = 0;i <5;i++)
    {
        let playerSelection = prompt("Enter your choice:");
        if(isValidSelection(playerSelection) == false)
        {
            console.log(invalidMessage);
            continue;
        }
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();
