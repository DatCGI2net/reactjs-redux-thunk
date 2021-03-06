//src/actions/catActions.js
import * as types from './actionTypes';
import catApi from '../api/catApi';

export function loadCatsSuccess(cats){
  return {type: types.LOAD_CATS_SUCCESS, cats};

}
export function updateCatSuccess(cat){
  return {type: types.UPDATE_CAT_SUCCESS, cat}
}

export function loadCats(){
  return function(dispatch){
    return catApi.getAllCats().then(
      cats => {
        dispatch(loadCatsSuccess(cats));
      }
    ).catch(error => {
      throw(error);
    });
  }
}

export function updateCat(cat){
  return function(dispatch){
    return catApi.updateCat(cat).then(responseCat => {
      dispatch(updateCatSuccess(responseCat));
    }).catch(error => {
      throw(error);
    })
  };
}

export function createCatSuccess(cat){
  return {type: types.CREATE_CAT_SUCCESS, cat}
}
export function sendToCatPage(cat){
  return {type: types.REDIRECT_CAT_SUCCESS, cat}
}

export function createCat(cat){
  return function(dispatch){
    return catApi.createCat(cat).then(responseCat => {
      dispatch(createCatSuccess(responseCat));
      dispatch(sendToCatPage(responseCat));
    }).catch(error => {
      throw(error);
    })

  }
}

export function deleteCatSuccess(cat){
  return {type: types.DELETE_CAT_SUCCESS, cat}
}


export function deleteCat(cat){
  return function(dispatch){
    return catApi.deleteCat(cat).then(responseCat => {
      dispatch(deleteCatSuccess(cat));

      return;
    }).catch(error => {
      throw(error);
    })

  }
}
