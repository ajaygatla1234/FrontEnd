class User{
    public name:string="";
    public greet():void{
        console.log(`Hello, my name is ${this.name}!`);
    }
}

//ccreating an instance of the user class
const person1 = new User();
//assigning a value to the public property
person1.name="John";
//calling the public method to display theb greeting
person1.greet();
