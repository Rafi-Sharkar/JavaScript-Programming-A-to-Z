// find(callback, value) return the value fo the first element that pass certain condition

console.clear()
let numbers = [5,55,14,5,78];
let firstEventNum = numbers.find(x => x%2===0)

console.log(firstEventNum)