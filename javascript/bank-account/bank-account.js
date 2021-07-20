export class BankAccount {
  constructor() {
    this._balance = 0;
    this.active = false;
  }

  open() {
    this.active = true;
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit() {
    throw new Error("Remove this statement and implement this function");
  }

  withdraw() {
    throw new Error("Remove this statement and implement this function");
  }

  get balance() {
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
