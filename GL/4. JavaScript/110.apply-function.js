const person ={
    firstName:'Sagar',
    lastName:"B v"
}

function greet(greeting, message){
    return `${greeting} ${this.firstName}, ${message}`;  //expression language
    //return greeting+" "+this.firstName+" "+message;   //in java script language
}
var result=greet.apply(person,["Hello",'How are you?']);
console.log(result);