function greet(message, name){
    console.log(name+", "+message);
}

greet("All the Best","Subbu");
console.log(greet instanceof Object);  //true
console.log(greet instanceof Number);  //false

function number(message, name){
    console.log(name+message);
}

number(10,20);
console.log(number instanceof Object);  //true
console.log(number instanceof Number);  //false