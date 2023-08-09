console.log("Hello World")

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max+1);
    return Math.floor(Math.random() * (max - min) + min);
}
function getComputerChoice(){
    let computerChoise = getRandomInt(1,3);
    if(computerChoise===1){
        return "rock"
    }else if(computerChoise===2){
        return "paper"
    }else{
        return "scissors"
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection)
    if(playerSelection === computerSelection){
        return "tie"
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        return "lose"
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "win"
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "lose"
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "win"
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "lose"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "win"
    }else{
        return "ERROR"
    }
}
function game(){
    let userScore = 0;
    let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let round = playRound(playerSelection, getComputerChoice())
        console.log(round);
        if(round==="win"){
            userScore++;
        }else if(round==="lose"){
            computerScore++;
        }
    }
    if(userScore>computerScore){
        console.log("User win");
    }else if(userScore<computerScore){
        console.log("Computer win");
    }else{
        console.log("TIE trizteza");
    }
}