let playerScore = 0;
let compScore = 0;


function computerPlay(){
    const possibleOpt = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random()*3);
    let computerSelection = possibleOpt[randNum];

    console.log(computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    let winner = "";
    
    if(playerSelection === computerSelection){
        console.log("Draw");
        winner = "draw";
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            console.log("Computer Wins! Paper beats Rock");
            winner = "Computer";
        }else if(computerSelection === "scissors"){
            console.log("Player Wins! Rock beats Scissors");
            winner = "Player";
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            console.log("Computer Wins! Scissors beats Paper");
            winner = "Computer";
        }else if(computerSelection === "rock"){
            console.log("Player Wins! Paper beats Rock");
            winner = "Player";
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("Computer Wins! Rock beats Scissors")
            winner = "Computer";
        }else if(computerSelection === "paper"){
            console.log("Player Wins! Scissors beats Paper");
            winner = "Player";
        }
    }
    if(winner === "Player"){
            playerScore++;
        }else if(winner === "Computer"){
            compScore++;
        }

    if(winner === "Player" || winner === "Computer"){
    alert (winner + " has won this round!" + "\n" + 
            "===============" + "\n" +
            "= Computer: " + compScore + "     =" + "\n" +
            "= Player: " + playerScore + "             =" + "\n" +
            "===============");
    }else if(winner == "draw"){
        alert ("It was a tie!" + "\n" + 
            "===============" + "\n" +
            "= Computer: " + compScore + "     =" + "\n" +
            "= Player: " + playerScore + "             =" + "\n" +
            "===============");
    }
    return winner;
}

function playerInput(){
    answer = prompt("Enter: Rock, Paper, or Scissors");
    answer = answer.toLowerCase();
    console.log(answer);
    return answer;
}
function game(){

    for(var i = 0; i < 5; i++){
        const playerSelection = playerInput();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

        console.log("===============");
        console.log("= Computer:" + compScore + "  =");
        console.log("= Player:" + playerScore + "    =");
        console.log("===============");
    }

    if(playerScore > compScore){
        alert("Player Wins!");
    }else if(playerScore < compScore){
        alert("Computer Wins");
    }else if(playerScore === compScore){
        alert("Its a tie!")
    }
}

game();