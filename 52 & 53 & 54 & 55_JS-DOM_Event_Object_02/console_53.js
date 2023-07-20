// FocusEvent Object

// Doesn't work on these tags 
// <br>, <head>, <title>, <html>, <iframe>, <meta>,
// <param>, <script>, <style>, <base>, <bdo>

// 1. blur
// 2. focus
// 3. focusin
// 4. focusout

const input = document.querySelector("input");

input.addEventListener("blur", function(e){
    console.log("Blur is occured")
    console.log(e.target.value)
    input.value = e.target.value.toUpperCase();
})
input.addEventListener("focus", function(e){
    console.log("focus is occured")
})
// input.addEventListener("focusin", function(){
//     console.log("focusin is occured")
// })
// input.addEventListener("focusout", function(){
//     console.log("focusout is occured")
// })