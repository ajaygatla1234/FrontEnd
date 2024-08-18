var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.calculateInterest = function () {
        var interestRate = 0.05;
        return this.balance * interestRate;
    };
    return BankAccount;
}());
//creating an instance of the BankAccount class
var account = new BankAccount(1000);
//attempting to access private members
//console.log(account.balance);  //error
