function Person(first, last, eyecolor) {    //Person Constructor
    this.firstName = first;
    this.lastName = last;
    this.eyecolor = eyecolor;
}

//adding a property to an object using prototype
Person.prototype.nationality="Indian";
Person.nationality="Indian";   //undefined, because attribute must be the part of prototype

const myself=new Person("Subbu", "Nampally", "Pink");
console.log("Name        : "+myself.firstName);

console.log("Nationality : "+myself.nationality);

console.log("Eye Color   : "+myself.eyecolor);