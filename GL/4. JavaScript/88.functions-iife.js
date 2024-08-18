const greeting="Hello World";
(
    function(){
        console.log("Inside IIFE");
       console.log(greeting);
    }
)();

//iife with returning values

const city=(
    function(){
        console.log("Inside IIFE with Returning Value");
        var city = "Hyderabad";
        return city;
    }
)();   // "}" = end of function body. ")" = end of Expression. "()" = calling the function

console.log(city);

//iife function with parameters

var sum = (
    function(x,y){
        console.log("Inside IIFE with Arguments and Returning value");
        return x+y;
    }
)(4,7);

console.log(sum);