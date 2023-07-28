// Default and Rest parameter
"use strict"
// function message(text="Hellow this is default parameter"){
//     console.log(`${text}`)
// }
// // message("I love Allah");
// message()

function display(x,y, ...z){
    console.log(`x = ${x}\ny = ${y}\nz = ${z}`)
}
display(10, 20, 30, 40, 50, 60, 70)