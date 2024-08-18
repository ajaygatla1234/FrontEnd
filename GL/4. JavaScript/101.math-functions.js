console.log(Math.random());
console.log(Math.min(3,4,1,9,3,6));
console.log(Math.max(3,4,1,9,3,6));
console.log(Math.ceil(3.2564));
console.log(Math.floor(3.2564));
var numbers = [3,4,1,9,3,6];
console.log("Minimum elements in the array");
console.log(Math.min.apply(null,numbers));
console.log();

//parseInt
var num="6";
num=Number.parseInt(num);
num=num*2;
console.log(num);

//parseFloat
var num2="6.5";
num2=num2*2;
console.log(num2);
var num=5.56789;
var n=num.toFixed(2);

//var n=5.56789.toFixed(2);
console.log("n="+n);

//isNaN()
console.log(isNaN(256)); //false
console.log(isNaN("256")); //false
console.log(isNaN("S2")); //true

//parsing numbers into decimal and hexadecimal radix
console.log("Decimal 10 is : "+Number.parseInt('10',10));
console.log("Binary 101 is : "+Number.parseInt('101',2));  //101
console.log("Octal 101 is : "+Number.parseInt('101',8));  //8-octal
console.log("Hexadecimal 'b' is : "+Number.parseInt('b',16));  //16-hexadecimal