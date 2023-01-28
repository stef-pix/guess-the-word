//<ul> where players guess will appear
const guessedLetters = document.querySelector(".guessed-letters");

//GUESS! button
const guessButton = document.querySelector(".guess");

//text input where player will guess a letter
const letterInput = document.querySelector(".letter");

//empty <p> where word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");

//<p> where remaining guesses will display
const guessesRemaining = document.querySelector(".remaining");

//<span> inside the <p> where remaining guesses will display
const numGuesses = document.querySelector(".remaining span");

//empty <p> where messages will appear when player guesses a letter
const message = document.querySelector(".message");

//the hidden button that will appear prompting player to play again
const newGame = document.querySelector(".play-again");

//starting word
const word = "magnolia";

//word placeholder
const wordUpdate = function(word){

    wordArray=[];
    const symbol = "●";

    for (let i = 0; i < word.length; i++){
        wordArray.push("●");
    }

    wordInProgress.innerText = wordArray.join("");
    console.log(wordInProgress);

}
wordUpdate(word);