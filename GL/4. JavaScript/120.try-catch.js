

// function showHi(){
//     console.log("hi")
// }

try{
    showHi();
    console.log("After showHi() function call");
}

catch(err){  //error object is thrown to catch block
    //err is reference to the error
    console.log(err.message);  //message is a property of err.
}

finally{
    console.log("From finally block");
}