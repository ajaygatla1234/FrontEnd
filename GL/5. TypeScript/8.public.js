var User = /** @class */ (function () {
    function User() {
        this.name = "";
    }
    User.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, "!"));
    };
    return User;
}());
//ccreating an instance of the user class
var person1 = new User();
//assigning a value to the public property
person1.name = "John";
//calling the public method to display theb greeting
person1.greet();
