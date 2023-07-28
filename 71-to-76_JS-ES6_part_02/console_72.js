function display1(){
    console.log("I am display 01")
}


const display2 =()=>{
    console.log("I am display_02")
}

const display3 =()=> console.log("I am display_03");

display1()
display2()
display3()

function message1(){
    return "Hi I am message_01"
}
const message2 = () => "Hi I am message_02"

console.log(message1())
console.log(message2())

function add(num1, num2){
    return num1+num2;
}

const add1=(num1,num2)=> {return num1+num2}
const add2=(num1,num2)=> num1+num2




console.log(add(10,20))
console.log(add1(10,20))
console.log(add2(10,20))