import {redirect} from '../constants';

export default (state = false, action) => {
  if (action.type === redirect) {
    return action.payload;
  }
  return state;
};
