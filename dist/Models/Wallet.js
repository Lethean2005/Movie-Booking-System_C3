"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(balance) {
        this.balance = balance;
    }
    pay(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Payment of ${amount} successful. Remaining balance: ${this.balance}`);
            return true;
        }
        else {
            console.log('Payment failed: Insufficient balance.');
            return false;
        }
    }
    topUp(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Wallet topped up by ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log('Top-up failed: Amount must be positive.');
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.Wallet = Wallet;
