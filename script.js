let playerScore = 0;
let compScore = 0;

const container = document.querySelector("#container");

const scoreboard = document.createElement('div');
scoreboard.textContent = `===============
                         Computer: ${compScore}
                         Player: ${playerScore}
                         ===============`;
scoreboard.style.cssText = "white-space: pre-line";
container.appendChild(scoreboard);

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
        scoreboard.textContent = `===============
                                 ${winner} has won this round!
                                 Computer: ${compScore}
                                 Player: ${playerScore}
                                 ===============`;
    }else if(winner === "draw"){
        scoreboard.textContent = `===============
                                 It was a tie!
                                 Computer: ${compScore}
                                 Player: ${playerScore}
                                 ===============`;
    }
    
    if (playerScore === 5){
        scoreboard.textContent = `===============

                                 Player has won the game!

                                 ===============`;
    }else if(compScore === 5){
        scoreboard.textContent = `===============

                                  Computer has won the game!

                                  ===============`;
    }
    return winner;
}

    const playerChoice = document.querySelectorAll('button');

    playerChoice.forEach((button) => {
        
        button.addEventListener('click', () =>{
            console.log(button.id);
            playRound(button.id, computerPlay());
        });
    });

