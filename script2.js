//Reassign variable with button click
document.querySelector('#rock').addEventListener('click', () => game('rock'));
document.querySelector('#paper').addEventListener('click', () => game('paper'));
document.querySelector('#scissors').addEventListener('click', () => game('scissors'));

//Displays Computer Choice in DIV
function displayComputerChoice(computer) {
    const rock = document.querySelector('#comp-rock');
    const paper = document.querySelector('#comp-paper');
    const scissors = document.querySelector('#comp-scissors');
    const none = document.querySelector('#computer-choice');
    
    if (computer === 'rock') {
        rock.style.display = 'flex';
        none.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';
    } else if (computer === 'paper') {
        paper.style.display = 'flex';
        none.style.display = 'none';
        rock.style.display = 'none';
        scissors.style.display = 'none';
    } else {
        scissors.style.display = 'flex';
        none.style.display = 'none';
        paper.style.display = 'none';
        rock.style.display = 'none';
    } 
};

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
    displayComputerChoice(computer);
    return computer;
};

//If... Else Statement:
function playRound (user, computer) {
    if (user === computer) {
        return "Tie";
    } else if (user === "rock" && computer === "paper") {
        return "You Lose!";
    } else if (user === "rock" && computer === "scissors") {
        return "You Win!";
    } else if (user === "paper" && computer === "rock") {
        return "You Win!";
    } else if (user === "paper" && computer === "scissors") {
        return "You Lose!";
    } else if (user === "scissors" && computer === "paper") {
        return "You Win!";
    } else {
        return "You Lose!";
    } 
};

//Adds Score
//Grabs empty score divs
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
//Creates initial value
let USCount = 0;
let CSCount = 0; 
//Inserts initial value
userScore.innerText = `${USCount}`;
compScore.innerText = `${CSCount}`;
//Grabs playRound result



//Gets User Input && Plays Round
function game(e) {
    let user = e;
    let computer = getComputerChoice();
    console.log(playRound(user, computer));
};

