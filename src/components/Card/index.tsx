import './index.css';
import './index.css';

import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WINDOWS } from '../../enums';
import { AccountData } from '../../interfaces';
import { actionCreators } from '../../state/index';
interface CardProps {
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
}
const Card: FC<CardProps> = ({ firstName, lastName, email, amount }) => {
  const dispatch = useDispatch();
  const { changeWindow, currentAccount } = bindActionCreators(actionCreators, dispatch);
  const data: AccountData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    amount: amount,
  };
  return (
    <div
      onClick={() => {
        currentAccount(data);
        changeWindow(WINDOWS.ATM);
      }}
      className="cardContainer"
    >
      <div className="dataContainer">
        <div className="cardData">
          <h1>BT</h1>
          <div className="key"></div>
        </div>
        <div className="personalDataContainer">
          <div>{firstName + ' ' + lastName}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
