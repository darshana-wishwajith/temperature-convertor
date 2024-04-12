const tempNum = document.getElementById("tempNum");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const convert = document.getElementById("convert");
const out = document.getElementById("out");


convert.onclick = function(){

    let temp = Number(tempNum.value);
    let convertedTemp;

    switch(true){

        case toF.checked :
            convertedTemp = (temp * (9/5)) + 32;
            out.textContent = `${convertedTemp.toFixed(2)} °F`;
            break;

        case toC.checked :
            convertedTemp = (temp - 32) * (5/9);
            out.textContent = `${convertedTemp.toFixed(2)} °C`;
            break;
        
        default :
            alert("Select an unit");
    }
}