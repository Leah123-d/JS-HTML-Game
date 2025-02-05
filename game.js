/*
Guess My Number
Make a web page that generates a secret random number and the user can guess the number until they get it right. For each guess, the game should display whether the answer is higher, lower, or correct.

Optional Extensions:

(DONE)Track how many wrong guesses the user has made so far and display that count
(DONE)Track what numbers the user has already guessed and display those

Let the user choose the range of the secret number


*/

const secretNum = document.getElementById("secretNum");
const userGuess = document.getElementById("userGuess");
const guesses = document.getElementById("guesses");
const guessClue = document.getElementById("guessClue");
const numMatch = document.getElementById("numMatch");
const submitBtn = document.getElementById("submitBtn");
const guessCount = document.getElementById("guessCount");
const counter = document.getElementById("counter");
const myRange = document.getElementById("myRange");
const output = document.getElementById("output");

const max = 100;
const min = 1;

output.innerHTML = '5';

console.log(output.textContent = myRange.value);

myRange.oninput = function(){
    output.innerHTML = this.value;
}




let Num = Math.floor(Math.random() * (max-min) + min);
secretNum.textContent = Num //we are changing the text content of secret Num Div to hold our num
//the display will be hidden

numMatch.style.display = "none";
let wrongGuess = [];
//secretNum.style.display = "none" //the default for this is set to none

let count = 0;

submitBtn.addEventListener("click", function (){
    count++;
    counter.textContent = count;
    

    if(Num == guesses.value){
        console.log("match found");
        numMatch.style.display = "block";
    }
    else if(Num > guesses.value){
        guessClue.textContent = "Your Guess is too low";
        wrongGuess.push(guesses.value);
    }
    else if(Num < guesses.value){
        guessClue.textContent = "Your Guess is too high";
        wrongGuess.push(guesses.value);
    }

    else{
        numMatch.style.display = "none";
    }

    guessCount.textContent = Array.from(wrongGuess);

});





//to store the count, can I collect the number of times the button was clicked?
//next steps, I need to connect the min and max range choosen to connect to my functions


