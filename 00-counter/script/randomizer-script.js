const diceFirst = document.getElementById("diceFirst");
const diceSecond = document.getElementById("diceSecond");
const diceThird = document.getElementById("diceThird");

const randomBtn = document.getElementById("randomBtn");
const dices = [diceFirst, diceSecond,diceThird];

const firstDiceCheck = document.getElementById("firstDiceCheck");
const secondDiceCheck = document.getElementById("secondDiceCheck");
const thirdDiceCheck = document.getElementById("thirdDiceCheck");
const checks = [firstDiceCheck, secondDiceCheck, thirdDiceCheck];

randomBtn.onclick = function(){

    for(let i = 0; i < dices.length;i++){
            
        if(checks[i].checked){
            dices[i].textContent = Math.ceil(Math.random() * 6);
        }
    }


}
