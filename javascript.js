// Ask user for rock, paper, or scissors
function getUserChoice() {
    let userChoice = prompt('Rock, Paper, or Scissors?');
    // Input accounts for case sensitivity
    userChoice = userChoice.toUpperCase();
    return userChoice;
}

// Computer picks from rock, paper or scissors
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = getRandomWholeNum(0, 3);

    return choices[choice];
}

// Generate a number from a range
function getRandomWholeNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Compare user choice against computer choice
// Return result based on comparison
function compareChoices(userChoice, computerChoice) {
    if (computerChoice === 'ROCK') {
        if (userChoice === 'ROCK')
            return `You tied! Computer selected ${computerChoice}`;
        else if (userChoice === 'PAPER')
            return `You won! ${userChoice} beats ${computerChoice}`;
        return `You lost! ${computerChoice} beats ${userChoice}`;
    }

    if (computerChoice === 'PAPER') {
        if (userChoice === 'PAPER')
            return `You tied! Computer selected ${computerChoice}`;
        else if (userChoice === 'SCISSORS')
            return `You won! ${userChoice} beats ${computerChoice}`;
        return `You lost! ${computerChoice} beats ${userChoice}`;
    }

    if (computerChoice === 'SCISSORS') {
        if (userChoice === 'SCISSORS')
            return `You tied! Computer selected ${computerChoice}`;
        else if (userChoice === 'ROCK')
            return `You won! ${userChoice} beats ${computerChoice}`;
        return `You lost! ${computerChoice} beats ${userChoice}`;
    }
}

// Print result to console
function printResult(result) {
    console.log(result);
}

// Initiate playRound function
function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let result = compareChoice(userChoice, computerChoice);

    printResult(result);
}

function game() {
    playRound();
}

game()




