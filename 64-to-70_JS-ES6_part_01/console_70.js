// for vs foreach

var numbers =[10,20,30,40,50,60,70,80,90];
// for
// for(var x = 0; x<numbers.length; x++){
//     // console.log(numbers[x])
//     console.log(x)
// }


// for each
// numbers.forEach(myfunction)
// function myfunction(x){
//     console.log(x)
// }
// numbers.forEach(function(x){console.log(x)})

// var sqnum = []
// numbers.forEach(function(x){sqnum.push(x*x)})
// console.log(sqnum)

numbers.forEach(function(x, index, arr){
    arr[index] = x+5
})
console.log(numbers)




