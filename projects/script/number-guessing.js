const numberGuessInput = document.getElementById("numberGuessInput");
const numberGuessGameBtn = document.getElementById("numberGuessGameBtn");

const maxVal = 4;
const minVal = 1;
let answer = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal; 
let guess = 0;

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