// event listener

// var EL = document.querySelector("button").addEventListener("click",func_01)

// function func_01(){
//     alert("Hellow");
// }


// var myvar = document.querySelector("h1").addEventListener("mouseover", function(){alert("Hi")});

var myvar = document.querySelector("h1");

myvar.addEventListener("mouseover",function(){
    myvar.classList.add("my-style");
})

myvar.addEventListener("mouseout",function(){myvar.classList.remove("my-style");})
