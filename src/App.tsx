import './App.css';

import React from 'react';
import { useSelector } from 'react-redux';

import AccessPage from './components/AccessPage';
import ATM from './components/ATM';
import CreatePage from './components/CreatePage';
import StartPage from './components/StartPage';
import { WINDOWS } from './enums';
import { State } from './state/reducers';
function App() {
  const currentWindow = useSelector((value: State) => value.currentWindow);
  return (
    <div className="container">
      {currentWindow === WINDOWS.startPage ? (
        <StartPage />
      ) : currentWindow === WINDOWS.accesAccount ? (
        <AccessPage />
      ) : currentWindow === WINDOWS.createAccount ? (
        <CreatePage />
      ) : (
        <ATM />
      )}
    </div>
  );
}

export default App;
