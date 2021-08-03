export class BankAccount {
  constructor() {
    this.totalCash = 0;
    this.active = false;
  }

  isAccountActive() {
    if (!this.active) throw new ValueError("Account is inactive");
    return true;
  }

  open() {
    if (this.active) throw new ValueError("Cannot open an active account");
    this.active = true;
  }

  close() {
    this.isAccountActive();

    this.active = false;
    this.totalCash = 0;
  }

  deposit(amount) {
    this.isAccountActive();

    if (amount <= 0)
      throw new ValueError("Deposit amount must be greater than zero");

    this.totalCash += amount;
  }

  withdraw(amount) {
    this.isAccountActive();

    if (amount <= 0)
      throw new ValueError("Withdrawal amount must be greater than zero");
    if (amount > this.totalCash)
      throw new ValueError(
        `Withdrawal of ${amount} would exceeds balance of ${this.totalCash}`
      );

    this.totalCash -= amount;
  }

  get balance() {
    this.isAccountActive();
    return this.totalCash;
  }
}

export class ValueError extends Error {
  constructor(message = "Bank account error") {
    super(message);
  }
}
