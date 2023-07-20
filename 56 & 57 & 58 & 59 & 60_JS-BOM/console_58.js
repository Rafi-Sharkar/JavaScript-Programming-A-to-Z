// JS BOM
// JS Timing events methods
// setTimeOut(), setInterval()

// setTimeout(()=>{
//     console.log("hi")
// },2000)

// setTimeout(display, 3000);
// function display(){
//     console.log("display function")
// }

var btn = document.querySelector(".save_btn")
var message = document.querySelector(".message")

// btn.addEventListener("click", saveUser)

// function saveUser(){
//     message.textContent = "User registration successful";
//     setTimeout(() => {
//         message.textContent = ""
//     }, 3000);
// }

btn.addEventListener("click", displaycount);
function displaycount(){
    let count = 0;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);
}

