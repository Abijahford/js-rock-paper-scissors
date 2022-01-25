
// function called computerPlay - randomly return Rock Paper or Scissors, use this function in the game
// to make computer play. 
// set up an array of RPS, return at random R P or S
function computerPlay() {
    var computerChoice = ['rock','paper','scissors']
    rand = Math.floor(Math.random() * 3)
    return computerChoice[rand];
};
// console.log(computerPlay())

//function playRound(playerSelection, computerSelection) - plays a single round of RPS
//playerSelection needs to be case insensitive
// rock beats scissors, paper beats rock, scissors beat paper
function playRound(playerSelection, computerSelection = computerPlay()) {
    if (playerSelection === computerSelection) {
        return "Draw!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Rock covered by Paper!"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper covers Rock!"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Paper shredded by Scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors shred the Paper!"
    } else {
        return "You Lose! Scissors smashed by Rock!"
    }
};


// game() - use the previous function inside of this one to play a 5 round game 
// that keeps score and reports a winner or loser at the end.

function game() {
    let i = 0;
    while (i < 5) {
        let playersChoice = prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase(); // get user input
        var gameTracker = console.log(playRound(playersChoice)) 
        i++
    }
    calculateScore(gameTracker)
}

function calculateScore(tracker) {
    let playerWins = 0;
    let compWins = 0;
    if (tracker === "Draw!") {
        return 
    } else if (tracker === "You Lose! Rock covered by Paper!" || "You Lose! Paper shredded by Scissors" || "You Lose! Scissors smashed by Rock!"){
        compWins++
    } else {
        playerWins++
    }
    if (playerWins > compWins) {
        console.log("Congrats! You beat the Computer.") 
    } else {
        console.log("Get better please ;) The Computer beat you!")
    }
}

game()