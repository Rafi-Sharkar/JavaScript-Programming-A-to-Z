// callback and higher order function

// function square(x){
//     console.log(`square of ${x}: ${x*x}`)
// }
// square(5)
// const y = square;
// y(7)
// function higher_order_function(num, callback){
//     callback(num)

// }
// higher_order_function(6, square)



// task test. make task asynchronous

// const task_One = (callback) => { 
//     console.log("Task_1")
//     callback()
//     };

// const task_Two = (callback) => { 
//     setTimeout(() => {
//         console.log("Task_2. Data Loading");
//         callback();
//     }, 3000);};

// const task_Three = (callback) => { 
//     console.log("Task_3")
//     callback();
//     };

// const task_Four = (callback) => { 
//     console.log("Task_4")
//     callback();
//     };

// const task_Five = () => {
//     console.log("Task_5")

//     };


// task_One(()=>
// task_Two(()=>
// task_Three((()=>
// task_Four(()=>
// task_Five())))))

// task_Three()
// task_Four()
// task_Five()



let x = document.querySelector("#btn")

console.log("hi")
x.addEventListener("click", ()=>{
    console.log("Button is clicked")
})
console.log("Bye")