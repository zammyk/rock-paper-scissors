const choices = ["rock","paper","scissor"];
const drawMessage = "It's a draw";
const winMessage = "You win!";
const loseMessage = "You lose :(";
const invalidMessage = "Invalid Input";

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random()*3);
    return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    let roundMessage = "";
    if(playerSelection == computerSelection) {
        roundMessage+=drawMessage;
    }
    else if( (playerSelection == choices[0] && computerSelection == choices[2]) || 
        (playerSelection == choices[1] && computerSelection == choices[0]) ||
        (playerSelection == choices[2] && computerSelection == choices[1])){
        roundMessage+=winMessage;
    }
    else roundMessage+=loseMessage;
    return roundMessage;
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

// game();

function updateScoreDisplay(newScore){
    scoreDisplay.textContent = newScore;
}

function updateResultDisplay(resultMessage){
    roundResult.textContent = resultMessage;
}

function playRoundHelper(e){
    let computerSelection = getComputerChoice();
    let playerSelection;
    if(this.id == 'rockBtn')
        playerSelection = 'rock';
    else if(this.id == 'paperBtn')
        playerSelection = 'paper';
    else if(this.id == 'scissorBtn')
        playerSelection = 'scissor';
    else{
        console.log("Invalid Input!");
        return;
    }
    let playRoundResult = playRound(playerSelection, computerSelection);
    if(playRoundResult == winMessage)
        score+=5;

    /*
    let roundResultMessage = "Computer chose: " + computerSelection + ". Round verdict: " + playRoundResult;
    */

    if(computerSelection == 'rock')
        computerChoiceDisplay.innerHTML = "<img src='images/rock.png' class = 'rps-image'/><br/>";
    else if(computerSelection == 'paper')
        computerChoiceDisplay.innerHTML = "<img src='images/paper.png' class = 'rps-image'/><br/>";
    else
        computerChoiceDisplay.innerHTML = "<img src='images/scissor.png' class = 'rps-image'/><br/>";
    console.log(score);
}

function resetScore(e){
    score = 0;
    /*
    let roundResultMessage = "Computer chose: ... Round verdict: ...";
    updateResultDisplay(roundResultMessage);
    updateScoreDisplay(score);
    */
}

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorBtn = document.getElementById('scissorBtn');
let resetBtn = document.getElementById('resetBtn');

let roundResult = document.querySelector('.round-result');
let scoreDisplay = document.querySelector('.score');
let computerChoiceDisplay = document.querySelector('.computer-choice');
let score = 0;

rockBtn.addEventListener('click',playRoundHelper);
paperBtn.addEventListener('click',playRoundHelper);
scissorBtn.addEventListener('click',playRoundHelper);
resetBtn.addEventListener('click',resetScore);
