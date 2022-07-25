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
            console.log('You tied!');
        else if (playerSelection.toUpperCase() === 'PAPER')
            console.log('You won!')
        else
            console.log('You lost!')
    }

    if (computerSelection === 'PAPER') {
        if (playerSelection.toUpperCase() === 'PAPER')
            console.log('You tied!');
        else if (playerSelection.toUpperCase() === 'SCISSORS')
            console.log('You won!')
        else
            console.log('You lost!')
    }

    if (computerSelection === 'SCISSORS') {
        if (playerSelection.toUpperCase() === 'SCISSORS')
            console.log('You tied!');
        else if (playerSelection.toUpperCase() === 'ROCK')
            console.log('You won!')
        else
            console.log('You lost!')
    }
}

function playRound()

let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, paper, or scissors?');

console.log(`Computer selected ${computerSelection}!`)
playRound(computerSelection, playerSelection);