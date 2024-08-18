var projects = [
    {hours:20, name:"Project 1"},
    {hours:10, name:"Project 2"},
    {hours:30, name:"Project 3"},
    {hours:50, name:"Project 5"},
    {hours:40, name:"Project 6"}
    
];

console.log("Before sorting objects");
console.log(projects);

console.log("------------------------------------");

console.log("After sorting objects(Ascending Order)");
//sorting of objects
projects.sort(function(x,y){
    return x.hours-y.hours
} //END OF FUNCTION
); //END OF SORT()

console.log(projects);
console.log("------------------------------------");
console.log("After sorting objects(Descending Order)");
//sorting of objects
projects.sort(function(x,y){
    return y.hours-x.hours
} //END OF FUNCTION
); //END OF SORT()

console.log(projects);

