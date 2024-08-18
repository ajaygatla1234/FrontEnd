//call the function before declaration
getHi();  //shows Hi

//function declaration
function getHi(){
    console.log("Hi");
}

//getHello(); //error, cause it cannot execute before declaring the function
var getHello=function(){
    console.log("Hello");
}

getHello();  //shows Hello