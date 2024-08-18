//console.log(sum(10,20)); //we can't invoke the function before, while using function as expression

var sum = function(num1,num2){
    var result = num1+num2;
    return result;
};

console.log(sum(10,20));
