// MouseEvent -<html>, <head>,<meta>, <title>, <br>, <style>, <script>, <iframe>,
// <param>, <base>, <bdo>
// 1. click
// 2. dblclick
// 3. mousedown
// 4. mouseup
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseover 

console.clear();
const div = document.querySelector(".mouse_class");

// // click
// div.addEventListener("click", function(){
//     console.log("click");
// })
// // dblclick
// div.addEventListener("dblclick", function(){
//     console.log("dblclick is occoured");
// })
// // mousedown
// div.addEventListener("mousedown", function(){
//     console.log("mousedown is occoured");
// })
// // mouseup
// div.addEventListener("mouseup", function(){
//     console.log("mouseup is occoured");
// })
// // mouseenter
// div.addEventListener("mouseenter", function(){
//     console.log("mouseenter is occoured");
// })
// // mouseleave
// div.addEventListener("mouseleave", function(){
//     console.log("mouseleave is occoured");
// })
// mousemove
// div.addEventListener("mousemove", function(){
//     console.log("mousemove is occoured");
// })
// // mouseover
// div.addEventListener("mouseover", function(){
//     console.log("mouseover is occoured");
// })

// cordinate detaction
// div.addEventListener("mousemove",function(e){
//     console.log("X = "+e.clientX + ", Y= "+e.clientY);
//     console.log("offset X= "+ e.offsetX+", offset Y= "+e.offsetY);
// })

// click event
// div.addEventListener("click", function(e){
//     console.log(e.target.id)
//     console.log(e.target.className);
//     console.log(e.target.innerHTML);
//     console.log(e.target.textContent);
//     console.log(e.target.innerText);

//     })


const btn = document.querySelectorAll(".btn");
console.log(btn);

Array.from(btn).map((button)=> {
    button.addEventListener("click",function(){
    var txt = this.innerHTML
    console.log(txt+" has been clicked")

    })
})
