class Person{

}
const sagar = new Person();
console.log(sagar);

//using constructors
class Person1{
    constructor(){
        console.log("In Constructor of Person class");
    }
}

const sagar1 = new Person1();

class Person2{
    constructor(id,name){
        console.log("In Constructor of Person class : "+id+", "+name);
    }
}

const sagar2 = new Person2(1,'subbu');
//----------------------------------------------------------------------
class Person3{

    constructor(id,name){
        console.log(this);
        this.id=id;
        this.name=name;
        console.log("In Constructor of Person class : "+id+", "+name);
    }

    getDetails(){
        console.log(this.id+'\t'+this.name);
    }
}
const sagar4=new Person3(12345,'Sagar');
console.log(sagar4);
sagar4.getDetails();
//----------------------------------------------------------------------

class Employee extends Person3{

    constructor(id,name){
        super(id,name); //calling supper class constructor - Person3
    }
    getEmpDetails(){
        console.log("\nEmployee Details");
        console.log(this.id+' '+this.name);
    }
}
const sagar5 = new Employee(2,'Jaggu');
sagar5.getDetails();
sagar5.getEmpDetails();