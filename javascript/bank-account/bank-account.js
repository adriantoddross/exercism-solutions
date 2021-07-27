export class BankAccount {
  constructor() {
    this.totalCash = 0;
    this.active = false;
  }

  open() {
    this.active = true;
  }

  close() {
    this.active = false;
  }

  deposit(amount) {
    this.totalCash += amount;
  }

  withdraw(amount) {
    this.totalCash -= amount;
  }

  get balance() {
    if (this.active) {
      return this.totalCash;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
