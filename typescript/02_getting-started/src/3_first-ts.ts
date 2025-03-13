class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    // Record a transaction
    this._balance += amount;
  }

  private calculateTax() {}

  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, "John", 0);
console.log(account.balance);
