import { combineReducers } from 'redux';

import twitter from '../modules/twitter/reducer';
import sentiment from '../modules/sentiment/reducer';

export default combineReducers({
  twitter,
  sentiment,
});
