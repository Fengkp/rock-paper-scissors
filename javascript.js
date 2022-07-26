// Ask user for rock, paper, or scissors
function getUserChoice() {
    let userChoice = prompt('Rock, Paper, or Scissors?');
    userChoice = userChoice.toUpperCase();
    return userChoice;
}

// Generate a random 
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = getRandomWholeNum(0, 3);

    return choices[choice];
}

function getRandomWholeNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === 'ROCK') {
        if (playerSelection.toUpperCase() === 'ROCK')
            return 'You tied!';
        else if (playerSelection.toUpperCase() === 'PAPER')
            return 'You won!';
        return 'You lost!';
    }

    if (computerSelection === 'PAPER') {
        if (playerSelection.toUpperCase() === 'PAPER')
            return 'You tied!';
        else if (playerSelection.toUpperCase() === 'SCISSORS')
            return 'You won!';
        else
            return 'You lost!';
    }

    if (computerSelection === 'SCISSORS') {
        if (playerSelection.toUpperCase() === 'SCISSORS')
            return 'You tied!';
        else if (playerSelection.toUpperCase() === 'ROCK')
            return 'You won!';
        else
            return 'You lost!';
    }
}

let computerSelection = getComputerChoice();

console.log(`Computer selected ${computerSelection}!`)
console.log(playRound(computerSelection, playerSelection));
