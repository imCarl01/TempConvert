const textbox = document.getElementById("textbox");
const itFarenheit = document.getElementById("itFarenheit");
const itCelius = document.getElementById("itCelius");
const result = document.getElementById("result");
const form = document.querySelector("form")

let temp;

form.addEventListener("submit", convert)

function convert(e) {
    e.preventDefault(); //prevent the default behaviour
    if(itFarenheit.checked){
        temp = textbox.value;
        temp = 32 + (9 / 5 * temp);
        result.textContent = temp.toFixed(1); 
    }
    else if(itCelius.checked){
        temp = textbox.value;
        temp = ( temp - 32) * 5 / 9;
        result.textContent = temp;
    }
    else if(!itCelius.checked && !itFarenheit.checked){
        result.textContent = 'Select a Unit'
    }
}




