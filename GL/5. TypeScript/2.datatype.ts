let id:number=5;
let fname:string='Kumar';
let hasDog:boolean=true;

let unit:number;  //Declare variable without assigning a value
unit=5;

let firstName=new String('Kumar');
console.log(firstName);

//
let ids:number[] = [1,2,3,4,5];  //can only contain numbers
console.log(ids);
let names : string[]=['Danny','Anna','Bazza'];
let options:boolean[]=[true,false,false];
let books:object[]=[
    {name:'Fooled by randomness', author:'Nassim Taleb'},
    {name:'Sapiens', author:'Yuval Noah Harari'},
];  //can only contain objects

console.log("Names: "+names);
console.log("Options: "+options);
console.log("Books: "+books);
let arr:any[]=['hello',1,true];  //any basically reverts TypeScript back into Java
//union
let person:(string|number|boolean)[]=['Danny',1,true];
person[0]=100;
person[1]='Kumar';

console.log(person[0]);
console.log(person[1]);