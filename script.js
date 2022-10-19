//Title: Rock, Paper, Scissors
//Variables: Strings = Rock, Paper, Scissors???

//Variable: User Input = Prompt: Choose Rock, Paper, Scissors
let user = prompt("Rock, Paper, Scissors");

//Varaible: Random Computer Input = One of Three Above Variables
//Math Random
let computer = Math.floor(Math.random() * 3);
//Convert to String
// 0 is Rock
//1 is Paper
//2 is Scissors
if (computer === 0) {
    computer = "Rock";
} else if (computer === 1) {
    computer = "Paper";
} else {
    computer = "Scissors";
}
console.log(computer);

//If... Else Statement:
//User === Rock && Computer === Rock
//Tie
//User === Rock && Computer === Paper
//You Lose

//User === Rock && Computer === Scissors
//You Win

//User === Paper && Computer === Paper
//Tie
//User === Paper && Computer === Rock
//You Win
//User === Paper && Computer === Scissors
//You Lose

//User === Scissors && Computer === Scissors
//Tie
//User === Scissors && Computer === Paper
//You Win
//User === Scissors && Computer === Rock
//You Lose
if (user === "Rock" && computer === "Rock") {
    console.log("Tie");
} else if (user === "Rock" && computer === "Paper") {
    console.log("You Lose!");
} else if (user === "Rock" && computer === "Scissors") {
    console.log("You Win!");
} else if (user === "Paper" && computer === "Paper") {
    console.log("Tie");
} else if (user === "Paper" && computer === "Rock") {
    console.log("You Win!") 
} else if (user === "Paper" && computer === "Scissors") {
    console.log("You Lose!")
} else if (user === "Scissors" && computer === "Scissors") {
    console.log("Tie");
} else if (user === "Scissors" && computer === "Paper") {
    console.log("You Win!");
} else if (user === "Scissors" && computer === "Rock") {
    console.log("You Lose!");
} else {
    console.log("Please type proper answers... @.@");
}

