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
function compareChoices(userChoice, compareChoice) {
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

// Initiate playRound function
function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    compareChoice(userChoice, computerChoice);
    console.log(`Computer selected ${computerSelection}!`)
    console.log(playRound(computerSelection, playerSelection));
}

playRound()



