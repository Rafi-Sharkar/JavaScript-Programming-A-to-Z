// BOM (Browser Object Model)
// window object
// location object

// console.log(window.document) or console.log(document)
// console.log(window.location) or console.log(location)

// console.log(location.href)
// console.log(location.protocol)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.pathname)
console.clear();

var locDiv = document.querySelector(".location-div");

var p1 = locDiv.children[0]
p1.textContent = location.href

var p2 = locDiv.children[1]
p2.textContent = location.protocol

var p3 = locDiv.children[2]
p3.textContent = location.hostname

var p4 = locDiv.children[4]
p4.textContent = location.pathname

var p5 = locDiv.children[3]
p5.textContent = location.port

const visit = document.querySelector("#visit");
visit.addEventListener("click", function(){
    location.assign("https://www.google.com")
})

