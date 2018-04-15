import {getCurrInvoice} from '../constants';

export default (state = {}, action) => {
  if (action.type === getCurrInvoice) {
    return action.payload;
  }
  return state;
};
