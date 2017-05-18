// src/reducers/hobbyReducer.js
//src/reducers/catReducer.js

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.hobbies, action){
  switch (action.type) {
    case types.LOAD_HOBBIES_SUCCESS:
      return action.hobbies;
      //break;
    default:
      return state;
  }
}
