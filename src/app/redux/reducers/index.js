import {combineReducers} from 'redux';
import invoices from '../reducers/invoices';
import currInvoice from '../reducers/currInvoice';

export default combineReducers({invoices, currInvoice});
