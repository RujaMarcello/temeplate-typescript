import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AccountData } from '../interfaces';
import { actionCreators } from '../state/index';
import { State } from '../state/reducers';

const useCreateAccount = () => {
  const accounts: AccountData[] = useSelector((value: State) => value.accountsData);

  const dispatch = useDispatch();
  const { createAccount } = bindActionCreators(actionCreators, dispatch);
  const [data, setData] = useState<AccountData>({
    firstName: '',
    lastName: '',
    email: '',
    amount: 0,
  });
  const handleChange = (event: any) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const dataChecker = () => {
    for (let indexElement = 0; indexElement < accounts.length; ++indexElement) {
      if (accounts[indexElement].email === data.email) {
        return 0;
      }
    }
    return 1;
  };
  const handleSubmit = () => {
    const isEmailAlreadyExisting = dataChecker();
    if (isEmailAlreadyExisting) {
      createAccount(data);
    } else {
      alert('Email already existing');
    }
  };

  return { handleChange, handleSubmit };
};

export default useCreateAccount;
