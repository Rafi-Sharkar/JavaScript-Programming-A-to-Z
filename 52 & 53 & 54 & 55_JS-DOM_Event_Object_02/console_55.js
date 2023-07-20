// DragEvent Object
// dragstart
// drag
// dragend
// dragenter
// dragleave
// dragover
// drop

const para = document.querySelector("p");
const div = document.querySelector("div");
// dragstart
para.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("Text", e.target.id)
})
// dragover
div.addEventListener("dragover",function(e){
    e.preventDefault();
})
// drop
div.addEventListener("drop",function(e){
    let id = e.dataTransfer.getData("Text");
    console.log(id)
    div.appendChild(document.getElementById(id))
    e.preventDefault()
})

