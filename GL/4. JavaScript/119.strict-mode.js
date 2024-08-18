"use strict";

//var msg='Hello'; //global variable - msg
function showHi(){
    //var msg="hi";  //local variable
    msg="Hi";  //global variable
    console.log("Inside showHi() function");
    console.log(msg);
}

showHi();
console.log(msg);