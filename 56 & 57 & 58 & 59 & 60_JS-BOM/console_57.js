// js BOM
// popup boxes - alert, confirm, prompt

console.log(window)

// alert("error here")
// confirm("Are you sure?");

function deleteitem(){
    let value = confirm("Do you wnat to delete?")
    if (value){
        console.log("deleted. X")
    }else{
        console.log("Not delete. O")
    }
}
// deleteitem()

// for takeng input use prompt

function welcomemessage(){
    var fname = document.createElement("h1");
    // let text
    var name = prompt("Enter your name:")
    if (name == null || name == ""){
        text = "No name found";
    }else{
        // text = name;
        var textnote = document.createTextNode("Welcome, "+name);
    }
    fname.appendChild(textnote);
    document.body.appendChild(fname);
}

welcomemessage();
