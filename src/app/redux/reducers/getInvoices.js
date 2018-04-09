import {getInvoices, addInvoice} from '../constants';

export default (state = [], action) => {
  if (action.type === getInvoices) {
    return action.payload;
  }
  if (action.type === addInvoice) {
    return [...state, action.payload];
  }
  return state;
};
