import {combineReducers} from 'redux';
import invoicesOperations from '../reducers/invoicesOperations';
import redirect from '../reducers/redirect';

export default combineReducers({invoicesOperations, redirect});
