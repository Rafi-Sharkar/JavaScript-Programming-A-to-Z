
var mb = document.querySelectorAll(".myButton");

for(var i=0;i<mb.length;i++){
    mb[i].addEventListener("mouseover",function(){
        var txt = this.innerHTML;
        playAnimation(txt);
    })
}

function playAnimation(text){
    var selectedbutton = document.querySelector("."+text);
    selectedbutton.classList.add("animation");
    
    setTimeout(function(){
        selectedbutton.classList.remove("animation")
    },1000)

}