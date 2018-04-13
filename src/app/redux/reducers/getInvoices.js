import {getInvoices, addInvoice, removeInvoice} from '../constants';
import dataFoTabble from '../../data/dataFoTabble';

export default (state = dataFoTabble, action) => {
  if (action.type === getInvoices) {
    return action.payload;
  }
  if (action.type === addInvoice || action.type === removeInvoice) {
    return [...state, action.payload];
  }
  return state;
};
