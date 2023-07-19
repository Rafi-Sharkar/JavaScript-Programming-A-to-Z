//  keypress listener

// var mb = document.querySelectorAll("myButton");

// for(var i=0;i<mb.length;i++){
//     var txt = this.innerHTML

// }

// document.addEventListener("keypress", function(event){
//     var text = event.key;
//     audioPlay(text);
//     playanimation(text);

// })

var count = 0;
document.querySelector("#txt").addEventListener("keypress",function(event){
    count ++;
    var text = event.key;
    document.querySelector("p").innerHTML = "You have pressed "+ count;
})
