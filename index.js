const textbox = document.getElementById("textbox");
const itFarenheit = document.getElementById("itFarenheit");
const itCelius = document.getElementById("itCelius");
// const submitbtn = document.getElementById("submitbtn");
const result = document.getElementById("result");
let temp;

function convert(){
   
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
    else{
        result.textContent = 'Select a Unit'
    }
}

