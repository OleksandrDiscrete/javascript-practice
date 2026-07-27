const temperatureValue = document.getElementById("inputTemperature");
const temperatureType = document.getElementById("temperatureType");
const convertBtn = document.getElementById("convertBtn");
const convertResult = document.getElementById("convertResult");

convertBtn.onclick = function(){

    const t = +temperatureValue.value;
    const type = temperatureType.value;

    switch(type){
        case "c_to_f":
            convertResult.textContent = t * (9 / 5) + 32;
            break;
        case "c_to_k":
            convertResult.textContent = t + 273.5;
            break;
        case "k_to_f":
            convertResult.textContent = (t - 273.5) * 9 / 5 + 32;
            break;
        case "k_to_c":
            convertResult.textContent = t - 273.5;
            break;
        case "f_to_c":
            convertResult.textContent = (t - 32) * 5 / 9;
            break;
        case "f_to_k":
            convertResult.textContent = (t - 32) * 5 / 9 + 273.5;
            break;
    }
}