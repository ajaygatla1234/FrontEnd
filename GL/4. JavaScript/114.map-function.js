const persons=[
    {firstName:"Srinu", lastName:"Eagle"},
    {firstName:"Subbu", lastName:"Nampally"},
    {firstName:"Jaggu", lastName:"Vadla"},
    {firstName:"Suresh", lastName:"Kumar"},
    {firstName:"Navin", lastName:"Krishna"}
];

function getFullName(name){
    return [name.firstName, name.lastName].join(" ");
}

console.log(persons.map(getFullName));