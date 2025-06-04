export class Wallet{
    constructor(

        private balance: number,
       
    ){
        
    }
    public pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Payment of ${amount} successful. Remaining balance: ${this.balance}`);
        } else {
            console.log('Payment failed: Insufficient balance.');
        }
    }
    public topUp(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Wallet topped up by ${amount}. New balance: ${this.balance}`);
        } else {
            console.log('Top-up failed: Amount must be positive.');
        }
    }
}