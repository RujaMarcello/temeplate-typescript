import { Dispatch } from 'redux';

import { AccountsActions } from '../../enums';
import { AccountData, BankDeposit } from '../../interfaces';
export const changeWindow = (window: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'CHANGE_WINDOW',
      payload: window,
    });
  };
};

export const createAccount = (action: AccountData) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AccountsActions.CREATE_ACOUNT,
      payload: action,
    });
  };
};

export const depositMoney = (action: BankDeposit) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AccountsActions.DEPOSIT,
      payload: action,
    });
  };
};

export const currentAccount = (action: AccountData) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AccountsActions.CURRENT_ACCOUNT,
      payload: action,
    });
  };
};
