var numofwon = 0;
var numoflost = 0;


for(let i = 1; i<=5; i++){
    var num = parseInt(prompt("Enter intiger: "));
    var ran = Math.floor(Math.random()*5)+1 ;
    
    if(num == ran){
        console.log("You have won :) ");
        numofwon ++;
    }else{console.log("You have lost :(");
        numoflost ++;
    }
    }
console.log("won: "+numofwon)
console.log("Lost: "+numoflost)

document.write("Number of won = "+ numofwon+"<br>")
document.write("Number of lost = "+ numoflost)
