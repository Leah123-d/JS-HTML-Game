const secretNum = document.getElementById("secretNum");
const userGuess = document.getElementById("userGuess");
const guesses = document.getElementById("guesses");
const guessClue = document.getElementById("guessClue");
const numMatch = document.getElementById("numMatch");
const submitBtn = document.getElementById("submitBtn");

const max = 100;
const min = 1

let Num = Math.floor(Math.random() * (max-min) + min);
secretNum.textContent = Num //we are changing the text content of secret Num Div to hold our num
//the display will be hidden

numMatch.style.display = "none"; //the default for this is set to none

submitBtn.addEventListener("click", function (){
    console.log(guesses.value);
    console.log(Num);

    if(Num == guesses.value){
        console.log("match found");
        numMatch.style.display = "block"
    }
    else{
        numMatch.style.display = "none"
    }
});



//I want to see how I can make this work where the number will match and our message will display the numMatch message 