"use strict";

/**
 * A Bank Account class
 *
 * Provides the basic functionality that every account should have
 */
class Account {
  /**
   * Constructor for creating a new Account object
   *
   * @param {number} number the number for this account
   */
  constructor(number) {
    this._number = number; // the account number
    this._balance = 0.0;
  }

  /**
   * Getter for the 'private' number field
   *
   * @returns {number} the account number
   */
  getNumber() {
    return this._number;
  }

  /**
   * Accessor for the 'private' balance field
   *
   * @returns {number} balance for this account
   */
  getBalance() {
    return this._balance;
  }

  /**
   * Method to add money into the account
   *
   * @param {number} amount money to be deposited into the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   */
  deposit(amount) {
    if (amount <= 0) {
      throw new RangeError("Deposit amount has to be greater than zero");
    }
    this._balance += amount;
  }

  /**
   * Method to take money out of the account
   *
   * @param {number} amount money to be taken out of the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   * @throws {Error} when the account has insufficient funds (balance)
   */
  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance) {
      throw Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return "Account " + this._number + ": balance " + this._balance;
  }

  /**
   * Performs needed actions at the end of the month
   *
   * @returns {undefined}
   */
  endOfMonth() {
    return ""; // does nothing
  }
}

class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }
  getInterest() {
    return this._interest;
  }
  setInterest(interest) {
    return (this._interest = interest);
  }
  addInterest() {
    return this.getBalance() * this.getInterest() / 100;
  }
  toString() {
    return (
      "SavingsAccount " +
      this._number +
      ": balance " +
      this._balance +
      ": interest " +
      this.getInterest()
    );
  }
  endOfMonth() {
    this._balance = this._balance + this.addInterest();
    return "Interest added " + this.toString();
  }
}

class CheckingAccount extends Account {
  constructor(number, overdraftLimit) {
    super(number);
    this.setOverDraftLimit(overdraftLimit);
  }
  getOverDraftLimit() {
    return this._overDraft;
  }
  setOverDraftLimit(limit) {
    this._overDraft = limit;
  }
  
  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this.getBalance() + this.getOverDraftLimit()) {
      throw Error("Exceeded OverDraft Limit");
    }
    this._balance -= amount;
  }
  toString() {
    return (
      "CheckingAccount " +
      this._number +
      ": balance " +
      this._balance +
      ": overdraftLimit " +
      this.getOverDraftLimit()
    );
  }
  endOfMonth() {
    let overDraft = "";
    if (this._balance < 0) {
      overDraft = "Warning, low balance ";
    }
    return overDraft + this.toString(); // does nothing
  }
}
class Bank {
  constructor() {
    this._accounts = [];
  }
  static number = 500;
  static nextNumber() {
    Bank.number = Bank.number + 1;
    return Bank.number;
  }
  getAccounts() {
    return this._accounts;
  }
  deposit(account, amount) {
    this._accounts = this._accounts.map((acc) => {
      if (acc.getNumber() === account) {
        acc.deposit(amount);
      }
      return acc;
    });
  }
  withdraw(account, amount){
    this._accounts = this._accounts.map((acc) => {
        if (acc.getNumber() === account) {
          acc.withdraw(amount);
        }
        return acc;
      });
  }
  addAccount() {
    this._accounts.push(new Account(Bank.nextNumber()));
  }
  addSavingsAccount(interest) {
    this._accounts.push(new SavingsAccount(Bank.nextNumber(), interest));
  }
  addCheckingAccount(overdraft) {
    this._accounts.push(new CheckingAccount(Bank.nextNumber(), overdraft));
  }
  closeAccount(number) {
    this._accounts = this._accounts.filter((acc) => acc.getNumber() != number);
  }
  accountReport() {
    return this._accounts.map((acc) => acc.toString()).join("\n");
  }
  endOfMonth(){
    return this._accounts.map((acc) => acc.endOfMonth()).join("\n");
  }
}
let bank = new Bank();
bank.addAccount();
bank.addCheckingAccount(500);
bank.addSavingsAccount(13);
bank.deposit(501,100);
bank.deposit(502,100);
bank.deposit(503,100);
bank.withdraw(502,200);
bank.withdraw(503,60);
console.log(bank.endOfMonth());
