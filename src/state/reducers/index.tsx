import { combineReducers } from 'redux';

import accountsReducer from './accountsReducer';
import setCurrentAccountReducer from './setCurrentAccount';
import windowReducer from './windowReducer';
const reducers = combineReducers({
  currentWindow: windowReducer,
  accountsData: accountsReducer,
  setCurrendAccount: setCurrentAccountReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
