// Best practices
// use camelCase for naming
// variable declaration on top and initialize
// avoid unnecessary variables
// switch, case, must use default
// object and array with const
// == vs ===
// access dom less


// variable declaration on top and initialize
let FirstName, LastName, FullName, UserInfo, UserEmail;
// use camelCase for naming. CamelCase is taking first letter of wordpart in upper case
FirstName = "";
LastName = "";
FullName = "";
UserInfo = "";
UserEmail = "";
// avoid unnecessary variables. unnecessary variables is which variable use onec or twice
FullName = FullName + LastName;
// switch, case, must use default, eventhough we don't need it
switch (key) {
    case value:
        
        break;

    default:
        break;
}
// object and array with const
const name = ["Rafi", "Hasan", "Alif", "Mahabub","Tanjirul"]
console.clear()
// == vs === , (==) is just check value, but (===) is check value and datatype
// 2 == 2;  --> true
// 2 =="2"; --> true
// 2 === 2; --> true
// 2 ==="2" --> false

// access DOM less. use parent DOM and call their child. lessuse of take saperate DOM with call
// because DOM take more step to finding form DOM tree.

