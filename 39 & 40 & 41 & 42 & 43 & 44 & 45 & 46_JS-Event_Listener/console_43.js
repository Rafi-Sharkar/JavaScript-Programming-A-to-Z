
for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    // var text = this.innerHTML = text + " is clicked"
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";


    
})
}