// load work with global object like window
// unload work with global object like window
// scroll work with global object like window
// resize work with global object like window
// toggle work with details

// window is our gloval object
// load
window.addEventListener("load",function(){
    console.log("load")
})
// unload
window.addEventListener("unload",function(){
    console.log("unload")
})
// scroll
window.addEventListener("scroll",function(){
    console.log("scroll")
})
// resize
window.addEventListener("resize",function(){
    // console.log("resize")
    const width = this.window.outerWidth;
    const height = this.window.outerHeight;
    console.log(`Height:${height},Width: ${width}`)
})


// toggle
const dtl = document.querySelector("details");

dtl.addEventListener("toggle",function(e){
    
    console.log("toggle")
    console.log(e.target.open)

})


