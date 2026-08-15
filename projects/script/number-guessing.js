const numberGuessInput = document.getElementById("numberGuessInput");
const numberGuessGameBtn = document.getElementById("numberGuessGameBtn");
const demineBtn = document.getElementById("demineBtn");
const startBtn = document.getElementById("startBtn");

const maxVal = 4;
const minVal = 1;

let answer = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal; 
let guess = 0;
let timerID;

numberGuessGameBtn.onclick = function(){

    guess = Number(numberGuessInput.value);

    if(answer === guess){
        console.log("Correct!");
        answer = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal); 
    }
    else{
        console.log("No!");
    }
}

startBtn.onclick = function(){
    timerID = setTimeout(() => console.log("You lose"),1000);
}

demineBtn.onclick = function(){
    clearTimeout(timerID);
}
