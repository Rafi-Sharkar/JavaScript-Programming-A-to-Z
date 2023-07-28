

var students = [
    {
    id : 101,
    name : "Rafi Sharkar",
    cgpa : 2.98,
    },
    {
    id : 203,
    name : "Hasan AL Banna",
    cgpa : 3.35,
    },
    {
    id : 202,
    name : "Alif",
    cgpa : 3.75,
    }
]
console.log(students)

const studentsName =()=> students.filter((x)=>x.cgpa>3).map((y)=>y.name)

console.log(studentsName())







