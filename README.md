# js-rock-paper-scissors

A simple implementation of grade-school classic “rock paper scissors”. We’re just going to play the game from the browser console, but I will revisit this project later and add a Graphical User Interface with buttons and text.

## Goals

Rock beats Scissors, Paper beats Rock, Scissors beats Paper. Playing against a computer, with randomly generated outcome.

## Input

playerSelection - String as user input, case insensitive

## Output

return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

## Steps

function computerPlay - randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function playRound(playerSelection, computerSelection) - plays a single round of Rock Paper Scissors and returns the result.
function game() - use previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.