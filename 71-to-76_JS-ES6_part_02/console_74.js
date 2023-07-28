//  array destructure

let numbers = [10, 20, 30, 40, 50]

let [num1, num2, num3, num4, num5 ] = numbers

console.log(numbers[0])
console.log(numbers[1])

console.log(num3)
console.log(num4)

// swap variables

let a = 10, b = 20;
// console.log(`a = ${a} and b = ${b}`)
[a,b] = [b,a]
console.log(`a = ${a} and b = ${b}`)

// object destructure

// traditional way
const studentInfo =
{
    id : 2131130,
    fullName : "Rafi Sharkar",
    Place : "Narayanganj"
}
console.log(studentInfo.id)
console.log(studentInfo.fullName)
console.log(studentInfo.Place)

const {id, fullName} = studentInfo

console.log(id)
console.log(fullName)

// nested object destructure

const studentInfo_01 =
{
    id_01 : 2131131,
    fullName : "Rafi Sharkar",
    Place : "Narayanganj",
    languages : {
        native : "Bangla",
        beginner : "English"
    }
}

// ES6

const {id_01, languages} = studentInfo_01

console.log(id_01)
console.log(languages)


//destructuring function parameters

const studentInfo_02 = (std) => {
    console.log(`${std.id},  ${std.fullName}`)
}

const student = {
    id : 2120328, 
    fullName : "Methila Farzana Moni",

}

studentInfo_02(student)


// distructure 

const std_disS = ({id, fullName}) => {
    console.log(`${id}, ${fullName}`)
}

const student_01 = {
    id : 2131130,
    fullName : "Rafi Sharkar"
}
std_disS(student_01)






