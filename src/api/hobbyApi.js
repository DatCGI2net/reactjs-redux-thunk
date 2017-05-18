import { API_ROOT } from './consts';

class HobbyApi {
  static getAllHobbies(){
    return fetch(`${API_ROOT}/hobbies/`).then(response =>{
      return response.json()
    }).catch(error => {
      return error
    });
  }
}

export default HobbyApi;
