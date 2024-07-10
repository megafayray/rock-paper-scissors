let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("It's a draw! Your score:" + " " + humanScore + " & " + "Computer score:" + " " + computerScore);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert("You win: " + humanChoice + " beats " + computerChoice + "! " + "Your score:" + " " + humanScore + " & " + "Computer score:" + " " + computerScore);
        }

    else if(humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        alert("You lose: " + computerChoice + " beats " + humanChoice + "! " + "Your score:" + " " + humanScore + " & " + "Computer score:" + " " + computerScore);
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
    })
})

//Computer Choice Function:
function getComputerChoice(){
    let numba = Math.floor(Math.random()*3); //Creates a number generator
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

