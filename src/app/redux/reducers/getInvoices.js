import {getInvoices, addInvoice, removeInvoice} from '../constants';
import dataFoTabble from '../../data/dataFoTabble';

export default (state = dataFoTabble, action) => {
  if (action.type === getInvoices || action.type === removeInvoice) {
    return action.payload;
  }
  if (action.type === addInvoice) {
    return [...state, action.payload];
  }
  return state;
};
