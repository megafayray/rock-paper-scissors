let humanScore = 0;
let computerScore = 0;

const roundResults = document.querySelector("#roundResults");
const gameInfo = document.querySelector("#gameInfo");
const gameOver = document.querySelector("#gameOver");


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        roundResults.textContent = "It's a draw!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundResults.textContent = "You won this round: " + humanChoice + " beats " + computerChoice;
        }

    else if(humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        roundResults.textContent = "You lost this round: " + computerChoice + " beats " + humanChoice;
        }
    else{
        alert("Somethings not working here - please try again");
    }        
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = button.id;
        playRound(humanChoice,computerChoice);
        game();
    })
})

function getComputerChoice(){
    let numba = Math.floor(Math.random()*3);
            if (numba == "0"){ 
                return "rock";
            }

            else if (numba == "1"){
                return "paper";
            }
            else {
                return "scissors";
            }
}

function game(){
    gameInfo.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5){
        gameOver.textContent = "GAME OVER: YOU WON 5 GAMES!";
    }
    else if (computerScore === 5){
        gameOver.textContent = "GAME OVER: Computer won 5 games";
        }
}