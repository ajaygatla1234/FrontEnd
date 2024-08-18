function showHello(){    //callback Function
    console.log("showHello() is called");
}

function showHi(callback){
    // callback();
    console.log("ShowHi() is called");
    callback();
    //nested function
    function retFunction(){    //we cannot call the nested function directly, so we store it in a variable returnFunction
        console.log("From retFunction() from showHi() function");
    }
    return retFunction;
}

//pass callback function as argument
showHi(showHello);
console.log();
//calling nested function
var returnFunction = showHi(showHello);
returnFunction();