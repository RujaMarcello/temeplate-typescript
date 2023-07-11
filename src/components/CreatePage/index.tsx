import './index.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WINDOWS } from '../../enums';
import useCreateAccount from '../../hooks/useCreateAccount';
import { actionCreators } from '../../state/index';
const CreatePage = () => {
  const dispatch = useDispatch();
  const { changeWindow } = bindActionCreators(actionCreators, dispatch);
  const { handleChange, handleSubmit } = useCreateAccount();
  return (
    <div className="createPageContainer">
      <form onChange={handleChange} className="formContainer">
        <h1>Create</h1>
        <input name="firstName" placeholder="Firstname" required></input>
        <input name="lastName" placeholder="Lastname" required></input>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        ></input>
        <button onClick={handleSubmit}>Create</button>
        <button onClick={() => changeWindow(WINDOWS.startPage)}>Back</button>
      </form>
    </div>
  );
};

export default CreatePage;
