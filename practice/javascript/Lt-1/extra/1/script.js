const input = document.getElementById("input");
const toCelcious = document.getElementById("toCelcious");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");

let temp;

function convert(){
    if(toCelcious.checked){
        temp = Number(input.value)
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "C";
    }

    else if(toFahrenheit.checked){
        temp = Number(input.value);
        temp = temp * 9/5 + 32
        result.textContent = temp.toFixed(1) + "F";
    }

    else{
        result.textContent = "Choose an option";
    }
}