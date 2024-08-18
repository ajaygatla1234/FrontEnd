var cities=[
    'Hyderabad',
    'Bengaluru',
    'Pune',
    'Coimbatore',
    "Bahar"
];

console.log(cities);
console.log("Push Indore");
cities.push("Indore");
console.log(cities);
console.log("Pop Indore");
cities.pop();
console.log(cities);
cities.push("Bhopal",'Kochi');
console.log(cities);
cities.pop();
console.log(cities);

//shift 
var a=cities.shift();
console.log(a);
console.log(cities);
var b=cities.push();

//note:we can return shift value but not push & pop

//unshift
cities.unshift(a);
cities.unshift("Vakanda");
console.log(cities);