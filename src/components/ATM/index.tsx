import './index.css';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WINDOWS } from '../../enums';
import { AccountData, BankDeposit } from '../../interfaces';
import { actionCreators } from '../../state/index';
import { State } from '../../state/reducers';

const ATM = () => {
  const currentAccount: AccountData = useSelector((value: State) => value.setCurrendAccount);
  const accounts = useSelector((value: State) => value.accountsData);
  const dispatch = useDispatch();
  const { changeWindow, depositMoney } = bindActionCreators(actionCreators, dispatch);
  const data: BankDeposit = {
    email: currentAccount.email,
    amount: 100,
  };

  const handleDeposit = () => {
    event?.preventDefault();
    depositMoney(data);
    changeWindow(WINDOWS.ATM);
  };

  return (
    <form className="AtmContainer">
      <h1>{currentAccount?.amount}</h1>
      <input placeholder="Plase enter ammount"></input>
      <div>
        <button>Withdraw</button>
        <button onClick={handleDeposit}>Add Money</button>
        <button onClick={() => changeWindow(WINDOWS.accesAccount)}>Back</button>
      </div>
    </form>
  );
};

export default ATM;
