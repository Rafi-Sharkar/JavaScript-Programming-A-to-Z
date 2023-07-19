// test_01___
// var link = document.getElementsByTagName("a")[0];

// link.innerHTML = "Study with Rafi Sharkar"

// link.style.textDecoration = "None"
// link.style.color = "green"
// link.style.fontSize = "1.5rem"
// link.href = "https://www.google.com/"

// test_01___

// var hd01 = document.getElementsByTagName("h1")[0];
// hd01.innerHTML = "Say hellow"

//creating Elements

var hd03 = document.createElement("h1");    // creating heml element
var text = document.createTextNode("This is heading 2");    // creading text or value or content
hd03.appendChild(text);     // append into new created element

var mydiv = document.getElementById("my-div");      // select div in dom
mydiv.appendChild(hd03);       // append into selected div 



// remove element

var hd02 = document.getElementsByTagName("h1")[1]
mydiv.removeChild(hd02)

// create another

var hd00 = document.createElement("h1");
var text01 = document.createTextNode("Insert this in dom");
hd00.appendChild(text01);

mydiv.insertBefore(hd00,hd03);
