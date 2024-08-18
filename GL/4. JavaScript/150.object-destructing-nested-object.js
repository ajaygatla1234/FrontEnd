let person={
    firstName:'Vidya',
    lastName:'Sagar',
    address:{
        city:'Hyderabad',
        pincode:'500082'
    },
    emailIds:['vidya@gmail.com','sagar@gmail.com']
};


//using es6
let {firstName:fname,lastName:lname,address:{city:residence},emailIds:[firstMailId]}=person;
console.log(fname+" "+lname);
console.log(residence);
console.log(firstMailId);