//<ul> where players guess will appear
const playerGuesses = document.querySelector(".guessed-letters");

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

const guessedLetters=[];

//word placeholder
const wordUpdate = function(word){

    wordArray=[];
    const symbol = "●";

    for (let i = 0; i < word.length; i++){
        wordArray.push("●");
    }

    wordInProgress.innerText = wordArray.join("");
    //console.log(wordInProgress);

}
wordUpdate(word);

const validateInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    const letterMatch = input.match(acceptedLetter);
   // console.log(letterMatch);
  

    if ( input === "" ) {
       message.innerText = "Please enter a letter.";
    }
    if ( input.length > 1 ) {
        message.innerText = "Please guess one letter at a time.";
    }
      if ( ! letterMatch) {
       message.innerText = "Please guess a letter.";
    }
    else { 
        return input;
    }
}

//captures input
const makeGuess = function (letter) {

    letter.toUpperCase();

    //let check = guessedLetters.includes(letter);

    if(guessedLetters.includes(letter)){
            message.innerText="You already guessed that letter!"
    }
    else{
        guessedLetters.push(letter);
    }
    console.log(guessedLetters);
}

guessButton.addEventListener("click", function(e){
    e.preventDefault();

    const guess = letterInput.value;

    letterInput.value="";

    message.innerText="";
    
    const result = validateInput(guess);
    //validateInput(guess);
    //console.log(result);

    if(result){
        makeGuess(result);
    }
});