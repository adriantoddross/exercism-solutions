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
    if (this.active) {
      this.totalCash += amount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this.active) {
      this.totalCash -= amount;
    } else {
      throw new ValueError();
    }
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
