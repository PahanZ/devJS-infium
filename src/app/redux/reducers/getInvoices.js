import {getInvoices, addInvoice, removeInvoice, editInvoice} from '../constants';
import dataFoTabble from '../../data/dataFoTabble';

export default (state = dataFoTabble, action) => {
  if (action.type === getInvoices ||
    action.type === removeInvoice ||
    action.type === editInvoice ||
    action.type === addInvoice
  ) {
    return action.payload;
  }
  return state;
};
