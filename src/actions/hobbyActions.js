//src/actions/hobbyActions.js

import * as types from './actionTypes';
import HobbyApi from '../api/hobbyApi';


export function loadHobbiesSuccess(hobbies){
  return {type: types.LOAD_HOBBIES_SUCCESS, hobbies};
}

export function loadHobbies(){
  return function(dispatch){
    return HobbyApi.getAllHobbies().then(hobbies =>{
      dispatch(loadHobbiesSuccess(hobbies));
    }).catch(error => {
      throw(error);
    })
  };
}
