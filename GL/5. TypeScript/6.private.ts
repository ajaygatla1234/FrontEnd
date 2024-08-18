class BankAccount{
    private balance: number;
    constructor(initialBalance:number){
        this.balance=initialBalance;
    }

    private calculateInterest():number{
        const interestRate=0.05;
        return this.balance*interestRate;
    }
}
//creating an instance of the BankAccount class
const account = new BankAccount(1000);
//attempting to access private members
//console.log(account.balance);  //error
//console.log(account.calculateInterest());