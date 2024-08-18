function showHello(){    //callback Function
    console.log("showHello() is called");
}

function showHi(callback){
    callback();
    console.log("ShowHi() is called");
    // callback();
}

//pass callback function as argument
showHi(showHello);