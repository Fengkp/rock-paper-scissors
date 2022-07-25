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
let playerSelection = prompt('Rock, paper, or scissors?');

console.log(`Computer selected ${computerSelection}!`)
console.log(playRound(computerSelection, playerSelection));
