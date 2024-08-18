function showHi(){
    console.log(this);  //current context
    console.log();
    console.log("Hello");
}

showHi();  //Environment info : shows info about script from node environment

var sagar={
    name:'Sagar',
    getName: function(){
        console.log(this);  //context of console().function
        return this.name;
    }
};

console.log(sagar.getName());
var getName=sagar.getName;   //function as value
getName();
console.log(getName===sagar.getName);  //true