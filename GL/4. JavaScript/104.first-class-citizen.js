function add(a,b){
    return a+b;
}

var sum=add;
var result =add(10,20);
console.log("Sum, by calling the function itself - add(10,20) is : "+result);

var result2=sum(10,20);
console.log("Sum, by calling the function reference - add(10,20) is : "+result2);


//a function can ber sent as argument or parameter to some other function

//function as parameters
function average(a,b,fn){
    return fn(a,b)/2;
}

var avg=average(10,20,sum);  //sum is call to function
console.log("Average = "+avg);
