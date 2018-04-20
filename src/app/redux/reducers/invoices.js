import {GET_INVOICES, ADD_INVOICE, REMOVE_INVOICE, EDIT_INVOICE, GET_CURR_INVOICE} from '../types';

const invoices = (state = {}, action) => {
  switch (action.type) {
    case GET_INVOICES: return action.payload;
    case EDIT_INVOICE: return Object.assign({}, state, {[action.payload.id]: action.payload});
    case ADD_INVOICE: return Object.assign({}, state, {[action.payload.id]: action.payload});
    case REMOVE_INVOICE: {
      const newstate = Object.assign({}, state);
      delete newstate[action.payload];
      return newstate;
    }
    default:
      return state;
  }
};

const currInvoice = (state = {}, action) => {
  if (action.type === GET_CURR_INVOICE) {
    return action.payload;
  }
  return state;
};

export {invoices, currInvoice};
