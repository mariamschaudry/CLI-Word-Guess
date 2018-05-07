// **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var Game = require("./word.js");
// var Word = require("./word.js");
var inquirer = require("inquirer");
var clear = require('clear');
var chalk = require('chalk'); 

var currentGame; 
var player; 

function Player () {
    this.name = ""; 
    this.wins = 0; 
    this.losses = 0; 
    this.gameCount = 0;
}

// Creating a player constructor // 
var createPlayer = function () {
    player = new Player(); 
    startGame (); 
};

var createGame = function () {
    // Create a new game using the current word
    currentGame = new Game();
    // Ask the user to guess letters for the current word
    startPlayerGuess();
};


// Initializing the inquierer package and asking questions //
var startPlayerGuess = function () {
    inquirer.prompt([
        {
            name: "guess",
            message: "Please guess a letter by striking any key on your keyboard ",
        }

    ]).then(function (answers) {
        console.log("You guess: " + answers.guess);
        // Check if player guess is correct and see if they need to keep guessing
         function correctGuess () {
        // currentGame.correctGuess(answers.guess);
        // If player can keep guessing, call prompt for player guess again.
        if (currentGame.status === 'continue') {
            promptPlayerGuess()
        }
        else if (currentGame.status === 'win') {
            currentPlayer.wins++;
            currentPlayer.gameCount++;
            console.log(" Player Status" +
                "\n Number of Wins: " + currentPlayer.wins +
                "\n Number of Losses: " + currentPlayer.losses
                + "\n");
            startGame();
        }
        else if (currentGame.status === 'gameOver') {
            currentPlayer.gameCount++;
            currentPlayer.losses++;
            console.log(" Player Status" +
                "\n Number of Wins: " + currentPlayer.wins +
                "\n Number of Losses: " + currentPlayer.losses
                + "\n");
            startGame();
        }
        }
    });
};

var startGame  = function () {
    inquirer.prompt([
        {
            type: 'confirm',
            name: "play",
            message: "Would you like to play a fun game?"
        }
    ]).then(function (answers) {

        if (answers.play === true) {
            createGame();
        }
        else {
            console.log("\nAww, it's okay. Maybe next time....")
        }
    });
};


clear();
console.log('\n');
createPlayer();


























