let display=
document.getElementById("display");
function appendValue(value){
    display.value += value;
}
function clearDisplay(){
    display.value = "";
}
function calculator(){
    display.value = eval(display.value);
}