import {getInvoices, addInvoice, removeInvoice, editInvoice} from '../constants';
import dataFoTabble from '../../data/dataFoTabble';

export default (state = dataFoTabble, action) => {
  switch (action.type) {
    case getInvoices: return action.payload;
    case editInvoice:
      state[action.payload2] = action.payload;
      return Object.assign({}, state);
    case addInvoice:
      state[action.payload2] = action.payload;
      return Object.assign({}, state);
    case removeInvoice:
      delete state[action.payload];
      return Object.assign({}, state);
    default:
      return state;
  }
};
