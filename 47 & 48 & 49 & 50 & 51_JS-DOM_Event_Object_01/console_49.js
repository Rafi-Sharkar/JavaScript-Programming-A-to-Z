// where does work "media event" 

// audio / video events
// canplay, play, playing, pause, progress, ended, volumechange, waiting

const video = document.querySelector("video");
// canplay_event
video.addEventListener("canplay",function(){
    console.log("canplay")
})
// play_event
video.addEventListener("play",function(){
    console.log("play")
})
// playing
video.addEventListener("playing",function(){
    console.log("playing")
})
// pause
video.addEventListener("pause",function(){
    console.log("pause")
})
// ended
video.addEventListener("ended",function(){
    console.log("Thanks for watching")
})
// volumechange
video.addEventListener("volumechange",function(){
    console.log("volumechange")
})
