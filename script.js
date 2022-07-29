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
        return 'WIN';
    else if (computerChoice === 'ROCK' && userChoice === 'SCISSORS'
             || computerChoice === 'PAPER' && userChoice === 'ROCK'
             || computerChoice === 'SCISSORS' && userChoice === 'PAPER')
        return 'LOSS';
    return 'TIE'
}

/* Print round result to console */
function printRoundResult(result, userChoice, computerChoice) {
    if (result === 'WIN') 
        console.log(`You won! ${userChoice} beats ${computerChoice}!`);
    else if (result === 'LOSS')
        console.log(`You lost! ${computerChoice} beats ${userChoice}!`);
    else
        console.log(`You tied! Computer also picked ${computerChoice}!`);
}

/* Return text content for results-display div depending on result */
function printGameResult(userScore, computerScore) {
    let result;

    if (userScore > computerScore) 
        result = 'You won the game!';
    else if (userScore < computerScore)
        result = 'You lost the game!';
    else
        result = 'The game was a draw!';
    return result + `\nUser Score: ${userScore} \nComputer Score: ${computerScore}`;
}

/* Generates choices for user and computer, compares those choices 
   then prints a result for the round */
function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    let result = compareChoices(userChoice, computerChoice);

    printRoundResult(result, userChoice, computerChoice);
    
    return result;
}

/* Keeps track of scores as each round plays out then prints overall results */
function game() {
    let userScore = 0;
    let computerScore = 0;
    let result;
    const btns = document.querySelectorAll('.btn');
    const resultsDisplay = document.querySelector('.result-display');

    btns.forEach(btn => btn.addEventListener('click', (e) => {
        let userChoice = e.target.id.toUpperCase();
        
        result = playRound(userChoice);
        if (result === 'WIN')
            userScore++;
        else if (result === 'LOSS')
            computerScore++;
        
        resultsDisplay.textContent = 
            `User Score: ${userScore} Computer Score: ${computerScore}`;
    }));
}

game();


