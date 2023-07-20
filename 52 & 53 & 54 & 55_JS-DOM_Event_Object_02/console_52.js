// keyboard Event Object
// 1. keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftkey, ctlkey, repeat

const textarea = document.querySelector("textarea");

// // keydown
// textarea.addEventListener("keydown", function(){
//     console.log("keydown");
// })
// // keypress
// textarea.addEventListener("keypress", function(){
//     console.log("keypress");
// })
// // keyup
// textarea.addEventListener("keyup", function(){
//     console.log("keyup");
// })

textarea.addEventListener("keyup", function(e){
    // console.log(e.key)
    // console.log(e.keyCode);
    // console.log(e.shiftKey);
    console.log(e.repeat);

})