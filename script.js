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
function getGameResult(scores) {
    const scoreboard = document.querySelector('.scoreboard');
    const result = document.createElement('div');

    if (scores[0] > scores[1]) 
        result.textContent = 'You won the game!';
    else
        result.textContent = 'You lost the game!';
    scoreboard.appendChild(result)
}

/* Generates choices for user and computer, compares those choices 
   then prints a result for the round */
function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    let result = compareChoices(userChoice, computerChoice);

    printRoundResult(result, userChoice, computerChoice);
    
    return result;
}

function updateScoreBoard(scores) {
    let scoreBoardText = 
        `User Score: ${scores[0]} Computer Score: ${scores[1]}`;
    const scoreboard = document.querySelector('.scoreboard');

    scoreboard.textContent = scoreBoardText;
}

function scoreTracker(scores, result) {
    if (result === 'WIN')
        scores[0]++;
    else if (result === 'LOSS')
        scores[1]++;
    return scores;
}

/* Keeps track of scores as each round plays out then prints overall results */
function game() {
    let scores = [0, 0]
    let result;
    const btns = document.querySelectorAll('.btn');

    updateScoreBoard(scores);

    btns.forEach(btn => btn.addEventListener('click', (e) => {
        let userChoice = e.target.id.toUpperCase();
        
        result = playRound(userChoice);
        scores = scoreTracker(scores, result)
        updateScoreBoard(scores);
        
        if (scores[0] == 5 || scores[1] == 5) {
            getGameResult(scores)
            scores = [0, 0];
        }
    }));
}

game();


