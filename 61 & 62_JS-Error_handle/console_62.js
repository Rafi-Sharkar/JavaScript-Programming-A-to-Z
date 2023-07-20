// The throw statement --> create custom errors.

// document.querySelector("#checkbtn").addEventListener("click", function(){
//     var num = document.querySelector("#num").value
//     console.log(num)
//     alert("button is clicked !")

// })


document.querySelector("#checkbtn").addEventListener("click", function(){
    var num = document.querySelector("#num").value

    try{
        if (num < 5){
            throw "input is too low"
        }else if (num > 10){
            throw "input is too high"
        }
    }catch(error){
        console.log(error);
        console.log("Fuck off !!")

    }
})