import {combineReducers} from 'redux';
import getInvoices from '../reducers/getInvoices';
import redirect from '../reducers/redirect';

export default combineReducers({getInvoices, redirect});
