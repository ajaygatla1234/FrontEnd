class Person{
    firstName:string="";
    lastName:string="";
    age:number=0;
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
}
//create Us object1
let p1=new Person("Damon","Salvatore",260);
console.log(p1);

//create Person object2
let p2=new Person("Chandler","Bing",69);
console.log(p2);