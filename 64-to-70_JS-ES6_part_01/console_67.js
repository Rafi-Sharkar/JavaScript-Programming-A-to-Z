function addNum(x, y, z){
    return x+y+z
}
let num_01 = [5,6,]
// rest only use in last parametter. and it take value and pack into and array
let number = [1,2,4,...num_01]
console.log(addNum(number[0],number[1],number[2]))
console.log(addNum(...number))

// spread use in anywhere in array.
num_01 = [5,6,...number,7 ,8]
console.log(num_01)

let num_02 = [13,15,14]
let num_03 = [31,37,36]
// let number_01 = num_02.concat(num_03);
let number_01 = [...num_02,...num_03]
console.log(number_01)

let p1 = {
    name : "Rafi Sharkar",
    age : 23,
}

let p2 = {
    nationalnality : "Bangladeshi",
    occupation : "Software Engineer"
}

let P = {...p1,...p2}
console.log(P)
