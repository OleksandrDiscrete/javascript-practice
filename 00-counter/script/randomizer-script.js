const diceFirst = document.getElementById("diceFirst");
const diceSecond = document.getElementById("diceSecond");
const diceThird = document.getElementById("diceThird");
const randomBtn = document.getElementById("randomBtn");
const array = [diceFirst, diceSecond,diceThird];

randomBtn.onclick = function(){

    for(let i = 0; i < array.length;i++){

            array[i].textContent = Math.ceil(Math.random() * 6);
    }
}
