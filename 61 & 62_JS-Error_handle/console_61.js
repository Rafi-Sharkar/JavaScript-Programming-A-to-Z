// Error handling -> try, catch, finally, throw
// try ... catch handle run time errors (program which is runntime error )
// Error objext
// The finally statement -> execute code, after try and c

try {
    // cade test
    alert("Hi everyone");
    alert(x);
}catch(error){
    // handle error
    alert("Inside catch block");
    console.log(error)
    // console.log(error.name)
    // console.log(error.message)
}finally{
    alert("Bye everyone");
}
// alert ("Hi Everyone")
// alert(x);
// alert ("Bye Everyone")