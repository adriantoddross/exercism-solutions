export class BankAccount {
  /*
 Refactor ideas
  
  1. Create a function to check for valid transactions/actions
    init function called isValidTransaction
      isValid(condition, ifStatement, errorMessage) => {
        if (this.active && condition) {
          action
        }
        else {
          throw new ValueError(errorMessage);
        }
      }
 */

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
  constructor(message = "Bank account error") {
    super(message);
  }
}
