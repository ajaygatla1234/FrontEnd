var id = 5;
var fname = 'Kumar';
var hasDog = true;
var unit; //Declare variable without assigning a value
unit = 5;
var firstName = new String('Kumar');
console.log(firstName);
//
var ids = [1, 2, 3, 4, 5]; //can only contain numbers
console.log(ids);
var names = ['Danny', 'Anna', 'Bazza'];
var options = [true, false, false];
var books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; //can only contain objects
console.log("Names: " + names);
console.log("Options: " + options);
console.log("Books: " + books);
var arr = ['hello', 1, true]; //any basically reverts TypeScript back into Java
//union
var person = ['Danny', 1, true];
person[0] = 100;
person[1] = 'Kumar';
console.log(person[0]);
console.log(person[1]);
