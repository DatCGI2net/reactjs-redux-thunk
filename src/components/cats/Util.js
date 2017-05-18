export function updateCatHobbiesX(event){
  const cat = this.state.cat;
  const hobbyId = event.target.value;
  const checkBoxHobbies = this.state.checkBoxHobbies;

  const hobby = checkBoxHobbies.filter(
    hobby => hobby.id == hobbyId)[0];

  console.log('hobbyId:', hobbyId, 'hobby:', hobby,
  'this.state.checkBoxHobbies:', this.state.checkBoxHobbies);

  const checked = !hobby.checked;
  hobby['checked'] = !hobby.checked;
  if(checked){
    cat.hobby_ids.push(hobby.id);
  }else{
    cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));

  }
  this.setState({cat: cat});


}

export function updateCatStateX(event){
  const field = event.target.name;
  const cat = this.state.cat;
  cat[field] = event.target.value;
  return this.setState({cat: cat});

}

export function hobbiesForCheckBoxes(hobbies, cat=null){
  const x =  hobbies.map(hobby =>{
    hobby['checked'] = false;
    if (cat && cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0){
      hobby['checked'] = true;
    }
    return hobby;

  });

  //console.log('hobbiesForCheckBoxes:', x);
  return x;

}
