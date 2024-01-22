const textbox = document.getElementById("textBox");
const fartenheit = document.getElementById("toFartenheit");
const celcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFartenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1)+ "°"
    }else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = (temp -32) * (5/9);
        result.textContent = temp.toFixed(1) + "°"
    }else{
        result.textContent = "Select a Unit after it convert"
    }
}