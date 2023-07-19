// Array is an object; collection of variable

// var names = new Array(5);
var names = ["Rafi","Sharkar","is","a","programmer"];

// names[0] = "Rafi";
// names[1] = "Sharkar";
// names[2] = "is";
// names[3] = "a";
// names[4] = "Programmer";


// document.write(names.length);
// document.write(names[3]);

// names.push("Tanty");     add from last index
// names.pop();     remove element from last index
// names.shift();   remove element from  first index
// names.unshift("Ekta");       add from first index
// names.splice("index of element add"," number of element remove from last index", "which element will add")
// names.splice(2, 1, "Riad", "Alif");
// var new_array = names.slice(2);
// var sortednames = names.sort();      // only applicable for string value

number = [20,30,50,70,10,24,55];
number.sort(function(a,b){
    return a-b;
})
document.write(number);


names.reverse();



// document.write(names);


// contanination of two array
// var country_1 = ["UK","KSA","UAE"];
// var country_2 = ["Afg", "BD", "US"];
// var country = country_1.concat(country_2);
// document.write(country);