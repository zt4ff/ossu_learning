abstract class IAccount {
  public abstract deposit: (amount: number) => {};
  public abstract withdraw: (amount: number) => {};
  public abstract transfer: (amount: number) => {};
  public abstract getAccountNumber: () => number;

  constructor(initAmount: number) {
    console.log(initAmount);
  }
}

// implement the interface with 1 or more class
class Chequing extends IAccount {
  public deposit = (amount: number) => {
    return "depositing";
  };
  public withdraw = (amount: number) => {
    return "withdrawing";
  };
  public transfer = (amount: number) => {
    return `transefing ${amount}`;
  };
  public getAccountNumber = () => {
    return 344543534;
  };
}

class Saving extends IAccount {
  public deposit = (amount: number) => {
    return "depositing";
  };
  public withdraw = (amount: number) => {
    return "withdrawing";
  };
  public transfer = (amount: number) => {
    return `transefing ${amount}`;
  };
  public getAccountNumber = () => {
    return 344543534;
  };
}

class Investment extends IAccount {
  public deposit = (amount: number) => {
    return "depositing";
  };
  public withdraw = (amount: number) => {
    return "withdrawing";
  };
  public transfer = (amount: number) => {
    return `transefing ${amount}`;
  };
  public getAccountNumber = () => {
    return 344543534;
  };
}

// create a facade class
class BankService {
  private bankAccounts: number; // acts like an ash
  constructor() {
    this.bankAccounts = Math.random() * 5345453445346;
  }

  public createNewAccount(type: string, initAmount: number) {
    let newAccount: IAccount | null = null;
    switch (type) {
      case "chequing":
        newAccount = new Chequing(initAmount);
        break;
      case "savings":
        newAccount = new Saving(initAmount);
        break;
      case "investment":
        newAccount = new Investment(initAmount);
        break;
      default:
        console.error("Invalude account type");
        break;
    }
    if (newAccount != null) {
      return newAccount.getAccountNumber();
    }
    return -1;
  }
}
