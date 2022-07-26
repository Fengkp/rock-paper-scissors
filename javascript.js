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
        if (userChoice === 'PAPER')
            return 'WON';
        else if (userChoice === 'SCISSORS')
            return 'LOST';
    }

    if (computerChoice === 'PAPER') {
        if (userChoice === 'SCISSORS')
            return 'WON';
        else if (userChoice === 'ROCK')
            return 'LOST';
    }

    if (computerChoice === 'SCISSORS') {
        if (userChoice === 'ROCK')
            return 'WON';
        else if (userChoice === 'PAPER')
            return 'LOST';
    }
    return 'TIE';
}

// Print result to console
function printResult(result, userChoice, computerChoice) {
    if (result === 'WON') 
        console.log(`You won! ${userChoice} beats ${computerChoice}!`);
    else if (result === 'LOST')
        console.log(`You lost! ${computerChoice} beats ${userChoice}!`);
    else
        console.log(`You tied! Computer also picked ${computerChoice}!`);
}

// Initiate playRound function
function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let result = compareChoices(userChoice, computerChoice);

    printResult(result, userChoice, computerChoice);
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    
}

playRound()




