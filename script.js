//Title: Rock, Paper, Scissors

//Variable: User Input = Prompt: Choose Rock, Paper, Scissors
function getUserChoice() {
    let user = prompt("Rock, Paper, Scissors");
}

//Varaible: Random Computer Input = One of Three Above Variables with Math Random
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    //Convert to String: 0 is Rock, 1 is Paper, 2 is Scissors
    if (computer === 0) {
        computer = "Rock";
    } else if (computer === 1) {
        computer = "Paper";
    } else {
        computer = "Scissors";
    }
    return computer;
}

//If... Else Statement:
function playRound (user, computer) {
    if (user === "Rock" && computer === "Rock") {
        console.log("Tie");
    } else if (user === "Rock" && computer === "Paper") {
        console.log("You Lose!");
    } else if (user === "Rock" && computer === "Scissors") {
        console.log("You Win!");
    } else if (user === "Paper" && computer === "Paper") {
        console.log("Tie");
    } else if (user === "Paper" && computer === "Rock") {
        console.log("You Win!");
    } else if (user === "Paper" && computer === "Scissors") {
        console.log("You Lose!");
    } else if (user === "Scissors" && computer === "Scissors") {
        console.log("Tie");
    } else if (user === "Scissors" && computer === "Paper") {
        console.log("You Win!");
    } else if (user === "Scissors" && computer === "Rock") {
        console.log("You Lose!");
    } else {
        console.log("Please type proper answers... @.@");
    }
}


