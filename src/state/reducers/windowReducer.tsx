import { WINDOWS } from '../../enums';
import { WindowActionInterface } from '../../interfaces';
const windowReducer = (state: string, action: WindowActionInterface) => {
  state = WINDOWS.startPage;
  switch (action.payload) {
    case WINDOWS.accesAccount:
      return WINDOWS.accesAccount;
    case WINDOWS.createAccount:
      return WINDOWS.createAccount;
    case WINDOWS.ATM:
      return WINDOWS.ATM;
    default:
      return WINDOWS.startPage;
  }
};
export default windowReducer;
