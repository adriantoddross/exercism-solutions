export class BankAccount {
  constructor() {
    this.totalCash = 0;
    this.active = false;
  }

  open() {
    this.active = true;
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit(amount) {
    this.totalCash += amount;
  }

  withdraw(amount) {
    this.totalCash -= amount;
  }

  get balance() {
    return this.totalCash;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
