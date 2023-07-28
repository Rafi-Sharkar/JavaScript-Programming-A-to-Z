
class Student {
    constructor(id, name, place){
        this.ID = id;
        this.Name = name;
        this.Place = place;
    }


    set StudentName(name){
        this.Name = name;       // set overwrite the previous variable and it take exactly one parametter
    }

    get studentInfo(){
        return this.ID +  " and " + this.Name;      // get return a chunk of information
    }
}

let s1 = new Student(2131130, "Rafi Sharkar", "Narayangang")
let s2 = new Student(2130328, "Methila Farzana Moni","Panchagar")
console.log(s1)
console.log(s2)


s1.StudentName = "Mustakim Billah Rafi"
// console.log(s1.Name)

console.log(s1.studentInfo)
