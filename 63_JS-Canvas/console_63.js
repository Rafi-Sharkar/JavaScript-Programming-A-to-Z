var c = document.getElementById("dgn");

var ctx = c.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "black"
ctx.strokeRect(10,10,380,280)

ctx.fillStyle = "green"
ctx.fillRect(11,11,378,278)

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 50, 0 , 2*Math.PI,false)
ctx.fillStyle("red")
ctx.fill()