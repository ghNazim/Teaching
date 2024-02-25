const numbers = document.getElementById("numbers")
const screen = document.getElementById("screen")
const extras = document.querySelectorAll(".extra")
const equal = document.getElementById("equal");
const backspace = document.getElementById("backspace");
const allclear = document.getElementById("allclear");

const operators = extras[1]


function numberHandler(e){
    screen.innerHTML = screen.innerHTML + e.target.innerHTML;
}
function operatorHandler(e){
    screen.innerHTML = screen.innerHTML + e.target.innerHTML;
}
function equalHandler(){
    screen.innerHTML = eval(screen.innerHTML);
}
function allClearHandler(){
    screen.innerHTML = "";
}
function backspaceHandler(){
    let str = screen.innerHTML
    str = str.slice(0,-1)
    screen.innerHTML = str
}
numbers.addEventListener('click',numberHandler)
operators.addEventListener('click',operatorHandler)
equal.addEventListener('click',equalHandler)
allclear.addEventListener('click',allClearHandler)
backspace.addEventListener('click',backspaceHandler)