var mb = document.querySelectorAll(".myButton");

for(var i=0;i<=mb.length;i++){
    mb[i].addEventListener("click",function(){
    var text = this.innerHTML;      
    audioPlay(text);

})}

function audioPlay(text){
    switch(text){
        case "Button A":
            var audio = new Audio("music/song_01.mp3");
            audio.play();
            break;
        case "Button B":
            var audio = new Audio("music/song_02.mp3");
            audio.play();
            break;
        case "Button C":
            var audio = new Audio("music/song_03.mp3");
            audio.play();
            break
    }
}

//  audio doesn't stop. I want if i click one the prevous one will stop