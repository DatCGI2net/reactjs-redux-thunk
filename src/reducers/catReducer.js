//src/reducers/catReducer.js

import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter } from 'react-router-dom';


export default function catReducer(state = initialState.cats, action){
  switch (action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.cats;
      //break;

    case types.DELETE_CAT_SUCCESS:
    console.log('detlet x:', state);
      return [
        ...state.filter(cat => cat.id !== action.cat.id)
      ]


    case types.CREATE_CAT_SUCCESS:
      //browserHistory.push(`/cats/${action.cat.id}`);
      const cats = [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ];
      const x = {cats: cats, isRedirect: true};
      console.log(' x UPDACREATE_CAT_SUCCESSTE_CAT_SUCCESS:', x);
      return cats;


    case types.UPDATE_CAT_SUCCESS:
      const catsx = [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ];
      console.log('cats x UPDATE_CAT_SUCCESS:', action.cat, catsx);
      return catsx;



    default:
      return state;
  }
}
