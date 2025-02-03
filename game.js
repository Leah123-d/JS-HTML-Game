const secretNum = document.getElementById("secretNum");
const userGuess = document.getElementById("userGuess");
const guessClue = document.getElementById("guessClue");

const max = 100;
const min = 1
let Num = Math.floor(Math.random() * (max-min) + min);
console.log(Num);