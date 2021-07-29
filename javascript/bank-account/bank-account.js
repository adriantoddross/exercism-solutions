export class BankAccount {
  // Refactor if statements into a simple function that will throw errors if account is inactive

  constructor() {
    this.totalCash = 0;
    this.active = false;
  }

  open() {
    if (this.active) {
      throw new ValueError();
    } else {
      this.active = true;
    }
  }

  close() {
    if (this.active) {
      this.active = false;
      this.totalCash = 0;
    } else {
      throw new ValueError();
    }
  }

  deposit(amount) {
    if (this.active && amount > 0) {
      this.totalCash += amount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this.active && amount > 0 && amount <= this.totalCash) {
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
