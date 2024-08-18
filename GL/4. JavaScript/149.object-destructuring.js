let person={
    firstName:'Vidya',
    lastName:'Sagar'
};

//before es6
let firstName=person.firstName;
let lastName=person.lastName;
console.log(firstName,lastName);

//using es6
let {firstName:fname,lastName:lname}=person;
console.log('Using ES6: '+fname+' '+lname);