
var mypara01 = document.querySelector("#para01")
var mypara02 = document.querySelector("#para02")

function addstyle(){
    // mypara.style.color = "red";
    // mypara.style.fontSize = "3rem";
    // mypara.style.fontStyle = "italic";
    // mypara.style.fontWeight = "bold"

    // or

    mypara01.classList.add("para-style");
    mypara02.classList.remove("para-style")
    
}

function removestyle(){

    mypara01.classList.remove("para-style")
    mypara02.classList.add("para-style")
}