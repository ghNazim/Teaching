console.log(a);
// console.log(b);
greet("Nazim");

var a = 5;
const b = 4;

function greet(name) {
  let m=1,n=2;
  var p=3;
  console.log("Hello world!, "+name);
  function x(){
    var str="hello from x"
    console.log(str)
    function y() {
      console.log("from y: ", m);
    }
    y()
  }
  x()
  return m+n+p;
}


console.log(a,b)
function x(){
  let aa=55;
  function y(){
    console.log(aa)
  }
  return y;
}

const z = x()
z()
z()
//hoisting