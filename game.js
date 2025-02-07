const secretNum = document.getElementById("secretNum");
const userGuess = document.getElementById("userGuess");
const guesses = document.getElementById("guesses");
const guessClue = document.getElementById("guessClue");
const numMatch = document.getElementById("numMatch");
const submitBtn = document.getElementById("submitBtn");
const guessCount = document.getElementById("guessCount");
const counter = document.getElementById("counter");

let max = 100;
let min = 1;

let Num = Math.floor(Math.random() * (max-min) + min);
secretNum.textContent = Num;
numMatch.style.display = "none";
secretNum.style.display = "none";

let count = 0;
let wrongGuess = [];

console.log(Num);


submitBtn.addEventListener("click", function (){
    count++;
    counter.textContent = count;
    

    if(Num == guesses.value){
        console.log("match found");
        numMatch.style.display = "block";
    }
    if(Num > guesses.value){
        guessClue.textContent = "Your Guess is too low!";
        wrongGuess.push(guesses.value);
    }
    if(Num < guesses.value){
        guessClue.textContent = "Your Guess is too high!";
        wrongGuess.push(guesses.value);
    }

    guessCount.textContent = Array.from(wrongGuess);

});




//The section below holds the code for my range slider, I will implement this 
//in a future iteration, the secret number is generating before the range is set.
//add animation for guessing the correct number 

/*const myRange = document.getElementById("myRange");
const min = myRange.min;
let max = parseInt(myRange.max);
const defaultValue = myRange.value;
const output = document.getElementById("output");
myRange.oninput = function(){
   max = parseInt(this.value);
   output.innerHTML = max
}
*/

/*
Guess My Number
Make a web page that generates a secret random number and the user can guess the number until they get it right. For each guess, the game should display whether the answer is higher, lower, or correct.

Optional Extensions:

(DONE)Track how many wrong guesses the user has made so far and display that count
(DONE)Track what numbers the user has already guessed and display those

Let the user choose the range of the secret number


*/
