import { AccountsActions } from '../../enums';
import { AccountData, AccountDataAction } from '../../interfaces';
const initialState: AccountData[] = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state: AccountData[] = initialState, action: AccountDataAction) => {
  switch (action.type) {
    case AccountsActions.CREATE_ACOUNT:
      return [...state, action.payload];
    case AccountsActions.DEPOSIT: {
      const index = state.findIndex((el) => el.email === action.payload.email);
      const newState = [...state];
      newState[index].amount += action.payload.amount;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
