import './index.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WINDOWS } from '../../enums';
import { actionCreators } from '../../state/index';
const StartPage = () => {
  const dispatch = useDispatch();
  const { changeWindow } = bindActionCreators(actionCreators, dispatch);

  return (
    <React.Fragment>
      <div onClick={() => changeWindow(WINDOWS.createAccount)} className="createAccountSide sideProperty">
        Create Account
      </div>
      <div onClick={() => changeWindow(WINDOWS.accesAccount)} className="accessAccountSide sideProperty">
        Access Account
      </div>
    </React.Fragment>
  );
};

export default StartPage;
