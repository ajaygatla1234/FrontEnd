//1
let prices = [5,4,3,2,1];
// let large=Math.max(prices);  //Nan, since max method cannot take the arrays as input

//2. using spread operator
let large=Math.max(...prices);
// let large=Math.max(5,4,3,2,1);
console.log(large);

//3. copying multiple arrays into one array
const numberOne = [1,2,3];
const numberTwo = [4,5,6];
const numbersCombined = [...numberOne,...numberTwo,7,8,9,10];
console.log(numbersCombined);
console.log("Greatest Num : "+Math.max(...numbersCombined));

//object spread
const myVehicle={
    brand:'Ford',
    model:'Mustung',
    color:'Red'
}
const updateMyVehicle={
    type:'Car',
    year:2021,
    color:'yellow'
    
}

const myUpdateVehicle={...myVehicle,...updateMyVehicle};
console.log(myUpdateVehicle);

//spread object 2
let person={
    firstName:'Vidya',
    lastName:'Sagar',
    address:{
        city:'Hyderabad',
        pincode:'500082'
    },
    emailIds:['vidya@gmail.com','sagar@gmail.com']
};

const personCopy={...person};
console.log(personCopy);

console.log("person");
console.log(person);
console.log("person copy");
console.log(personCopy);

//deep copy - individual properties copy
personCopy.firstName='Krishna';
personCopy.emailIds[1]='krishna@email.com';
console.log("person");
console.log(person);
console.log("person copy");
console.log(personCopy);
