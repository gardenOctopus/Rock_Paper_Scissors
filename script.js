//Title: rock, paper, scissors

//Buttons
document.querySelector('#rock').addEventListener('click', game);
document.querySelector('#paper').addEventListener('click', game);
document.querySelector('#scissors').addEventListener('click', game);


//Variable: User Input = Prompt: Choose rock, paper, scissors
function game() {
    let user = prompt("rock, paper, scissors");
    return user.toLowerCase();
}

//Varaible: Random Computer Input = One of Three Above Variables with Math Random
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    //Convert to String: 0 is rock, 1 is paper, 2 is scissors
    if (computer === 0) {
        computer = "rock";
    } else if (computer === 1) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    return computer;
}

//If... Else Statement:
function playRound (user, computer) {
    if (user === "rock" && computer === "rock") {
        return "Tie";
    } else if (user === "rock" && computer === "paper") {
        return "You Lose!";
    } else if (user === "rock" && computer === "scissors") {
        return "You Win!";
    } else if (user === "paper" && computer === "paper") {
        return "Tie";
    } else if (user === "paper" && computer === "rock") {
        return "You Win!";
    } else if (user === "paper" && computer === "scissors") {
        return "You Lose!";
    } else if (user === "scissors" && computer === "scissors") {
        return "Tie";
    } else if (user === "scissors" && computer === "paper") {
        return "You Win!";
    } else if (user === "scissors" && computer === "rock") {
        return "You Lose!";
    } else {
        return "Please type proper answers... @.@";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let user = game();
        let computer = getComputerChoice();
        console.log(computer);
        console.log(playRound(user, computer));
    }
}

//game();



