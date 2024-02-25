console.log(typeof document);
//dom manipulation

const heading = document.getElementById('heading')
const grel = document.querySelectorAll(".group")

console.log(grel)

grel.forEach((item)=>{
    item.style.color = "gray";
})
const button = document.querySelector(".btn")
button.style.width = "200px"
button.style.padding = "10px"
button.style.backgroundColor = "cyan"

function clickHandler(){
    heading.style.color = "red";
    grel[2].innerHTML = "I am changed after click"
}