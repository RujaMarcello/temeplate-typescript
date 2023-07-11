//accountsReducer
export interface AccountData {
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
}

export interface BankDeposit {
  email: string;
  amount: number;
}

export interface BankWithdraw {
  email: string;
  amount: number;
}

export interface AccountDataAction {
  type: string;
  payload: AccountData | BankDeposit | BankWithdraw;
}

//windowReducer

export interface WindowActionInterface {
  type: string;
  payload: string;
}

//changeAmountReducer
export interface ChangeAmountPayload {
  amount: number;
  email: string;
}
