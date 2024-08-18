var balance=50000;
var itemCost=40000.00;
if(balance>=itemCost){
    console.log("Buy Item");
    console.log();
}
else{
    console.log("Can't buy the item");
    console.log();
}

//using ternary operator
var msg;
msg=balance>=itemCost?"Buy Item":"cant buy the item";
console.log(msg);
console.log();

//using && operator
if(balance>=itemCost && itemCost<=balance){
    console.log("Buy Item");
    console.log();
}
else{
    console.log("Can't buy the item");
    console.log();
}

//using || operator
if(balance>=itemCost || itemCost<=balance){
    console.log("Buy Item");
    console.log();
}
else{
    console.log("Can't buy the item");
    console.log();
}

//other 
console.log(5+5*(8-10));

var strum="5";
var num=5;
console.log((strum+num)/11);  //implicit typecasting

console.log(strum==num);  //compares only values

console.log(strum===num); //compares values & datatypes

console.log(strum!==num); //output based on datatypes

