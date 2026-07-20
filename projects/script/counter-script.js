const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterLabel = document.getElementById("counterLabel");
const setterInput = document.getElementById("setterInput");
const setterBtn = document.getElementById("setterBtn");

let count = 0;

decreaseBtn.onclick = function(){
    count++;
    counterLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count--;
    counterLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}
setterBtn.onclick = function(){
    count = Number(setterInput.value);
    counterLabel.textContent = count;
}

