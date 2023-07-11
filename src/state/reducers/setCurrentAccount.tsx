import { AccountsActions } from '../../enums';
import { AccountData, AccountDataAction } from '../../interfaces';
const initialValue: AccountData = {
  firstName: '',
  lastName: '',
  email: '',
  amount: 0,
};
// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state: AccountData = initialValue, action: AccountDataAction) => {
  switch (action.type) {
    case AccountsActions.CURRENT_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
