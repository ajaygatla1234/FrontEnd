var cities=[
    'Hyderabad',
    'Bengaluru',
    'Pune',
    'Coimbatore',
    "Bahar",
    "Chennai"
];

cities.splice(1,3);  //takes index place. 1=starting index, 3=no. of elements from the index 1
console.log(cities);

//adding elements through splice
cities.splice(1,3,'Mysore','Nashik',"Hogwarts");
console.log(cities);

//slice
var a=cities.slice(1,3); //1=index place, 3=takes the element upto 3 i.e. before 3
console.log(a);
