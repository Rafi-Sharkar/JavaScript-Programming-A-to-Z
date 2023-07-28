// by promise use the asynchronoys

// How to create a promise. 
// There has three stage
//  1. Pending,
//  2. Resolve,
//  3. Reject



console.log("Welcome")
const promise_01 = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if (completedPromise){
        resolve("Completed promise 01")
    }else{reject(new Error("not completed promise 01"))}
})

promise_01
    .then((rs)=>{console.log(rs);})
    .catch((err)=>{console.log(err)})
    .finally(()=>{console.log("must")})

console.log("end")

const promise_02 = new Promise((resolve, reject)=>{
    resolve("DOne")
}) 
promise_02
    .then((rs)=>console.log(rs))


Promise.all([promise_01, promise_02])


