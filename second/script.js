const numbers = document.getElementById("numbers")
const screen = document.getElementById("screen")
const extras = document.querySelectorAll(".extra")
console.log(extras)

const operators = extras[1]
const manipulators = extras[0]

function numberHandler(e){
    screen.innerHTML = screen.innerHTML + e.target.innerHTML;
}
function operatorHandler(e){
    screen.innerHTML = screen.innerHTML + e.target.innerHTML;
}
function equalHandler(e){
    screen.innerHTML = eval(screen.innerHTML);
}
numbers.addEventListener('click',numberHandler)
operators.addEventListener('click',operatorHandler)
// equal.addEventListener('click',equalHandler)