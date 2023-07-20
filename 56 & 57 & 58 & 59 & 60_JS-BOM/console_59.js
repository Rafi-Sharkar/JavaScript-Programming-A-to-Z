

console.clear()

var btn = document.querySelector(".save_btn")
var message = document.querySelector(".message")

btn.addEventListener("click", startClack);

function startClack(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    minutes = formatTime(minutes);
    second  = formatTime(second)

    let time = hours+":"+minutes+":"+second;
    // console.log(time)

    message.textContent = time;

    setInterval(startClack, 1000);
}

function formatTime(value){
    if(value < 10){
        value = "0"+value;
    }
    return value
}