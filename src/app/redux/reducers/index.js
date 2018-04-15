import {combineReducers} from 'redux';
import getInvoices from '../reducers/getInvoices';
import getCurrInvoice from '../reducers/getCurrInvoice';
import redirect from '../reducers/redirect';

export default combineReducers({getInvoices, getCurrInvoice, redirect});
