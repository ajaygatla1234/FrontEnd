const person={
    firstName:"Subbu",
    lastName:"Nampally",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}

const member={
    firstName:"Jaggu",
    lastName:"Vadla"
}

var memberFullName=person.fullName.bind(member);
console.log(memberFullName());