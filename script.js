/* Prompts user for rock, paper, or scissors
   and changes input to uppercase to help with comparison function
   Need to account for inputs other than rock, paper or scissors */
function getUserChoice() {
    let userChoice = prompt('Rock, Paper, or Scissors?');
    
    userChoice = userChoice.toUpperCase();
    return userChoice;
}

/* Computer picks from rock, paper or scissors based on random num function*/
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = getRandomWholeNum(0, 3);

    return choices[choice];
}

/* Generate a number from a given range in order to randomize computer choices */
function getRandomWholeNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/* Compare user choice against computer choice
   then return how the user did as a string
   this will help with printing out round results and tracking scores */
function compareChoices(userChoice, computerChoice) {
    if (computerChoice === 'ROCK' && userChoice === 'PAPER'
        || computerChoice === 'PAPER' && userChoice === 'SCISSORS'
        || computerChoice === 'SCISSORS' && userChoice === 'ROCK')
        return 'USER WON';
    else if (computerChoice === 'ROCK' && userChoice === 'SCISSORS'
             || computerChoice === 'PAPER' && userChoice === 'ROCK'
             || computerChoice === 'SCISSORS' && userChoice === 'PAPER')
        return 'USER LOST';
    return 'TIE'
}

/* Print round result to console */
function printRoundResult(result, userChoice, computerChoice) {
    if (result === 'USER WON') 
        console.log(`You won! ${userChoice} beats ${computerChoice}!`);
    else if (result === 'USER LOST')
        console.log(`You lost! ${computerChoice} beats ${userChoice}!`);
    else
        console.log(`You tied! Computer also picked ${computerChoice}!`);
}

/* Print final result to console based on scores */
function printGameResult(userScore, computerScore) {
    if (userScore > computerScore) 
        console.log('You won the game!');
    else if (userScore < computerScore)
        console.log('You lost the game!');
    else
        console.log('The game was a draw!');
    console.log(`User Score: ${userScore} \nComputer Score: ${computerScore}`);
}

/* Generates choices for user and computer, compares those choices 
   then prints a result for the round */
function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let result = compareChoices(userChoice, computerChoice);

    printRoundResult(result, userChoice, computerChoice);
    
    return result;
}

/* Keeps track of scores as each round plays out then prints overall results */
function game() {
    let userScore = 0;
    let computerScore = 0;
    let gameLength = 5

    for (let i = 0; i < gameLength; i++) {
        let result = playRound();

        if (result === 'USER WON')
            userScore++;
        else if (result === 'USER LOST')
            computerScore++;
    }
    printGameResult(userScore, computerScore);
}

game();