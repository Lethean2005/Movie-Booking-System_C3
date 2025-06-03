class Wallet {
  balance: number = 0;

  pay(amount: number): boolean {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  topUp(amount: number): void {
    this.balance += amount;
  }
}