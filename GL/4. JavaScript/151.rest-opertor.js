//1. with Function Destructuring
function showValues(num1,num2,...others){
    console.log(num1);
    console.log(num2);
    console.log(others);
}

showValues(85,96,24,86,45);

console.log();
console.log("Sorted Function");
function sorted(...values){
    console.log(values);
    return values.sort();
}

let sortedArray = sorted(42,96,54,87,32);
console.log("Sorted Array: "+sortedArray);
console.log();
// //2a. with Array Destructuring
// let cities=['Hyderabad','Bengaluru','Pune',"Mysore"];
// let [city1,city2,...otherCities]=cities;
// console.log('City names');
// console.log(city1,city2,otherCities);

// //2b. with Array Destructuring
// let cities=['Hyderabad','Bengaluru','Pune',"Mysore"];
// let [...otherCities]=cities;
// console.log('City names');
// console.log(otherCities);

//2c. with Array Destructuring
let cities=['Hyderabad','Bengaluru','Pune',"Mysore"];
let [city1,city2,...otherCities]=cities;
console.log('City names');
console.log(city1,city2,...otherCities);

//3. With Object Destructing
let person={
    firstName:'Vidya',
    lastName:'Sagar',
    address:{
        city:'Hyderabad',
        pincode:'500082'
    },
    emailIds:['vidya@gmail.com','sagar@gmail.com']
};

let{firstName, lastName,...otherDetails}=person;
console.log(firstName,lastName,otherDetails);