//Selects Buttons & Adds Function

let userChoice; 

//Reassign variable with button click

const rock = document.querySelector('#rock');
rock.onclick = () => {userChoice = 'rock'};
console.log(userChoice);

const paper = document.querySelector('#paper');
paper.onclick = () => {alert('B')};

const scissors = document.querySelector('#scissors');
scissors.onclick = () => {alert('C')};


