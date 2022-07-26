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
            return 'USER WON';
        else if (userChoice === 'SCISSORS')
            return 'USER LOST';
    }

    if (computerChoice === 'PAPER') {
        if (userChoice === 'SCISSORS')
            return 'USER WON';
        else if (userChoice === 'ROCK')
            return 'USER LOST';
    }

    if (computerChoice === 'SCISSORS') {
        if (userChoice === 'ROCK')
            return 'USER WON';
        else if (userChoice === 'PAPER')
            return 'USER LOST';
    }
    return 'TIE';
}

// Print result to console
function printRoundResult(result, userChoice, computerChoice) {
    if (result === 'USER WON') 
        console.log(`You won! ${userChoice} beats ${computerChoice}!`);
    else if (result === 'USER LOST')
        console.log(`You lost! ${computerChoice} beats ${userChoice}!`);
    else
        console.log(`You tied! Computer also picked ${computerChoice}!`);
}

// Print final result to console
function printGameResult(userScore, computerScore) {
    if (userScore > computerScore) 
        console.log('You won the game!');
    else if (userScore < computerScore)
        console.log('You lost the game!');
    else
        console.log('The game was a draw!');
    console.log(`User Score: ${userScore}
Computer Score: ${computerScore}`);
}

// Initiate playRound function
function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let result = compareChoices(userChoice, computerChoice);

    printRoundResult(result, userChoice, computerChoice);
    
    return result;
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result === 'USER WON')
            userScore++;
        else if (result === 'USER LOST')
            computerScore++;
    }
    printGameResult(userScore, computerScore);
}

game();




