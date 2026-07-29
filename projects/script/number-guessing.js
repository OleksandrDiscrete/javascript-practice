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
        window.alert("Correct!");
        answer = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal); 
    }
    else{
        window.alert("No!");
    }
}

startBtn.onclick = function(){
    timerID = setTimeout(() => window.alert("You lose"),1000);
}

demineBtn.onclick = function(){
    clearTimeout(timerID);
}
