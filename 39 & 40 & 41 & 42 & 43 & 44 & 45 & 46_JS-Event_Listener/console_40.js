var photos = ["images/map_01.png","images/map_02.jpg","images/map_03.jpg"];

var imgtag = document.querySelector("img")

var count = 0;

function next(){
    count++;
    if (count >= photos.length){
        count = 0;
        imgtag.src = photos[count];
    }else{
    imgtag.src = photos[count];
    }
}

function prev(){
    count--;
    if (count< 0){
        count = photos.length-1;    // index start form 0 so (-1)
        imgtag.src = photos[count];
    }else{
        imgtag.src = photos[count];
    }
}