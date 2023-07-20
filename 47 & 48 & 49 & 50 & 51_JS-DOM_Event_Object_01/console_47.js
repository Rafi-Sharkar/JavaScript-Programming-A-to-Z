// where does work "change event"

// <input/> - text, number, password, email, color, radio, checkbox, 
//            time, date, datetime, week, month, url, tel, file
// <select>,
// <textarea>


// _____Write code_____

// js for input

// const input = document.querySelector("input");

// input.addEventListener("change", changeHandler)

// function changeHandler(e){
//     console.log(e.target)
// }

// js for checkbox

// const programs = document.querySelectorAll("input[name=program]");

// console.log(programs)

// Array.from(programs).map((programs)=>{
//     programs.addEventListener("change",programHandler)});

// function programHandler(e) {
//     if(e.target.checked){
//         console.log("checked")
//         console.log(e.target.checked)
//     }
// }

// js for select

const dep = document.querySelector("#department");

dep.addEventListener("change", handleDep);

function handleDep(e){

    console.log(e.target.value)

}