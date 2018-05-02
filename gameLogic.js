// GAME LOGIC //

const wordBank = ["mascara", "shoe", "bread", "plastic", "juice", "kleenex", "pledge", "candle", "neuroscience", "religion", "instrument", "fox", "thoughts", "imagination", "zebra"]; 

const chalk = require("chalk"); 
var Word = require("./word.js");

// Creating a word by using words from the wordbank //
function Game () {
    var word = new Word(wordBank.words[Math.floor(Math.random() * wordBank.words.length)]); 

// Call the word.grabLetters function to fill current word letters into array // 

word.grabLetters(); 

// New game object & parameters //

this.currentWord = word; 
this.guessesLeft = 12; 
this.previousGuess = []; 
this.status = "start"; 

console.log(chalk.magenta.bold("\nCurrent Word"));
console.log(this.word.showWord()); 
console.log(" Guesses Remaining: " + this.guessesLeft + "\n");

}

// Check if guess is corrent and update the words display // 

Game.prototype.isRight = function(guess) {

    var isRight = this.currentWord.checkLetter(guess);

// Subract from number of guess remaining if user guess is incorrect //
    if (isRight === 0) {
        console.log(chalk.redBright("\n You're wrong! Please try again."));
        this.guessesLeft--;
    } else {
        console.log(chalk.cyanBright.bold("\nYay! You're correct!"));
    }
}

// Check to see if user guessed the whole word //

this.currentWord.checkWord(); 
if ((this.guessesLeft > 0) && (this.currentWord.found === false)) {
    console.log(this.currentWord.showWord());
    console.log(" Guesses Remaining: " + this.guessesLeft);
    console.log(" ==============================");
    this.status = "continue"; 
} else if (this.guessesLeft === 0) {
    console.log("\n Sorry, game over! \n The correct word was: \n " + chalk.redBright.inverse(this.currentWord.wordValue) + "\n");
    this.status = "gameOver";
} else {
    console.log("\n You won the game! The correct word was: \n" + chalk.greenBright.inverse(this.currentWord.wordValue) + "\n");
    this.status = "win"; 
};


// Exporting the constructor //
module.exports = Game; 