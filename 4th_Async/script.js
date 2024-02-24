// single threaded synchronous language 
// Parallel execution
// asyncronous natutre - using some browser features

// setTimeout(function,time(ms))



// const interval1= setInterval(()=>{
    //     console.log("inside interval")
    // },1000)
    // setTimeout(() => {
        //   clearInterval(interval1);
        // }, 10000);
        
// console.log("Wbsite opened")
// const p1 = new Promise((resolve,reject)=>{  // pending - resolve - reject
//     console.log("Payment page opened")
//     setTimeout(()=>{
//         console.log("Payment received")
//         resolve(111)
//     },5000)
// })
// // .then .catch
// p1.then((res)=>{
//     console.log("Ticket added")
// }).catch(()=>{
//     console.log("error handled")
// })

// console.log("Last line")

// sign up [email,phone number, details] -> amazon database lookup -- > 

// https://newsapi.org/v2/top-headlines?country=us&apiKey=88414a7150c14a38adc0076cec6a0d08

// const prom = fetch(
//   "https://newsapi.org/v2/top-headlines?country=us&apiKey=88414a7150c14a38adc0076cec6a0d08"
// );
// let data={};
// prom.then((res)=>{
//     return res.json()
// }).then((res)=>{
//     data = res
//     console.log(data)
// }).catch(()=>{
//     console.log("error handled")
// })

const url =
  "https://newsapi.org//top-headlines?country=us&apiKey=88414a7150c14a38adc0076cec6a0d08";
const getData = async function(){
    try{
        const d1 = await fetch(url)
        const data = await d1.json()
        console.log(data)

    }catch(err){
         console.log("error handled")
    }
}
getData()