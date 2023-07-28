// forEach, map, filter

var numbers = [2,3,4,5,11,17]

var sqnum = numbers.map(function(x){return x*x})

var new_num = numbers.filter(function(x){return x>5})
console.log(new_num)
