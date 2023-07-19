// creating a object

var student1 = {
    names : "Rafi Sharar",
    age : 23,
    cgpa : 2.9,
    lang : ["C++", "C", "python", "Javascript"]

}

// adding a constructor
function STUDENT(names, age, cgpa, lang){
    this.names = names;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.names);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }

    }


var student_01 = new STUDENT("Tanty",30,3.6,["Bangla","English"]);
var student_02 = new STUDENT("Rafi",23, 2.98, ["Python","C++","JavaScript"]);
var student_03 = new STUDENT("Alif",22, 3.6, ["java","C++","JavaScript"]);



student_03.display();