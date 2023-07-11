import './index.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { AccountData } from '../../interfaces';
import { State } from '../../state/reducers';
import Card from '../Card';
const AccessPage = () => {
  const accounts: AccountData[] = useSelector((value: State) => value.accountsData);

  return (
    <div className="accessPageContainer">
      {accounts &&
        accounts.map((element: AccountData, index: number) => {
          return (
            <Card
              key={index}
              firstName={element.firstName}
              lastName={element.lastName}
              email={element.email}
              amount={element.amount}
            />
          );
        })}
    </div>
  );
};

export default AccessPage;
