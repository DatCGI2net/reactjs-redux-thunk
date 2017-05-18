import { API_ROOT } from './consts';
const form_headers = new Headers({
  'Content-Type': 'application/json'
});

class CatApi {
  static getAllCats(){
    return fetch(`${API_ROOT}/cats/`).then(
      response => {
        return response.json();
      }
    ).catch(error => {
      return error;
    });
  }

  static updateCat(cat){
    const updateUrl = `${API_ROOT}/cats/${cat.id}`;
    console.log('updateUrl:', updateUrl, cat);
    return fetch(updateUrl,{
      method: 'PUT',
      headers: form_headers,
      body: JSON.stringify({cat: cat})
    }).then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });


  }

  static createCat(cat){
    const request = new Request(`${API_ROOT}/cats/new`,{
      method: 'POST',
      headers: form_headers,
      body: JSON.stringify({cat: cat})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteCat(cat){
    const request = new Request(`${API_ROOT}/cats/${cat.id}`,{
      method: 'DELETE',
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}





export default CatApi;
