First Javascript project for The Odin Project
Create the game Rock Paper Scissors, a game played enitrely in the console

jj        //Write the logic to get the human choice
            //Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
            //Hint: Use the prompt method to get the user’s input.
            //Test what your function returns by using console.log.

        function getHumanChoice(){
            let choice = prompt("Enter rock, paper, or scissors");
            console.log(choice);


            choice = prompt();
            
            if (choice.toLowerCase() === "rock") {
                console.log("rock");
            }
        }