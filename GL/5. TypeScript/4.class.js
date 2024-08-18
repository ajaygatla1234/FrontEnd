var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
//create Us object1
var p1 = new Person("Damon", "Salvatore", 260);
console.log(p1);
//create Person object2
var p2 = new Person("Chandler", "Bing", 69);
console.log(p2);
