const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("start");
const countBtn = document.getElementById("output");

const randomlabel0 = document.getElementById("0");
const randomlabel = document.getElementById("1");
const randomlabel1 = document.getElementById("2");
const randomBtn = document.getElementById("random");
const array = [randomlabel0,randomlabel,randomlabel1];

let count = 0;

plusBtn.onclick = function(){
    count++;
    countBtn.textContent = count;
}
minusBtn.onclick = function(){
    count--;
    countBtn.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countBtn.textContent = count;
}

randomBtn.onclick = function(){

    for(let i = 0; i < array.length;i++){
        
            array[i].textContent = Math.ceil(Math.random() * 6);
    }
}
