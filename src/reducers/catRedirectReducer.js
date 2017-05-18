//src/reducers/catReducer.js

import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function catRedirectReducer(
  state = initialState.newCatId, action){
  switch (action.type) {


    case types.REDIRECT_CAT_SUCCESS:


      console.log(' x REDIRECT_CAT_SUCCESS:', action.cat);
      return action.cat.id;

      

    default:
      return state;
  }
}
