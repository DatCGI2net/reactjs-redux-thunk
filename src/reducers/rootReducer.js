//src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import cats from './catReducer';
import hobbies from './hobbyReducer';
import catredirect from './catRedirectReducer';


const rootReducer = combineReducers({
  // short hand property names
  cats,
  hobbies,
  catredirect
});

export default rootReducer;
