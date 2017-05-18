// src/components/cats/CatPage.js

import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as catActions from '../../actions/catActions';
import HobbyList from './HobbyList';
import CatForm from './CatForm';
import { updateCatStateX, updateCatHobbiesX, hobbiesForCheckBoxes} from './Util';
import { Redirect} from 'react-router-dom';



class CatPage extends React.Component {
  static propTypes = {
     cat: PropTypes.object.isRequired,
     catHobbies: PropTypes.array.isRequired,
     checkBoxHobbies: PropTypes.array.isRequired,
     actions: PropTypes.object.isRequired,
     isDeleted: PropTypes.bool.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      cat: this.props.cat,
      catHobbies: this.props.catHobbies,
      checkBoxHobbies: this.props.checkBoxHobbies,
      saving: false,
      isDeleted: false,
    };
    this.updateCatState = updateCatStateX.bind(this);
    this.updateCatHobbies = updateCatHobbiesX.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);


  }
  toggleDelete(){

    this.setState({isDeleted: !this.state.isDeleted})
  }

  deleteCat(event){
    //this.setState({isDeleted: !this.state.isDeleted})
    this.toggleDelete();
    this.props.actions.deleteCat(this.state.cat);



  }

  saveCat(event){
    event.preventDefault();
    //console.log('saving:', this.props.actions);
    this.toggleEdit();
    this.props.actions.updateCat(this.state.cat);
  }



  componentWillReceiveProps(nextProps){
      if(this.props.cat.id !== nextProps.cat.id){
        this.setState({cat: nextProps.cat});
      }

      if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length){
        this.setState({catHobbies: nextProps.catHobbies,
            checkBoxHobbies: nextProps.checkBoxHobbies,
        });
      }
      this.setState({isDeleted: nextProps.isDeleted,
          newCatId: nextProps.newCatId,
        });
      console.log('CatPage compnentWillReceivePropss:', nextProps);
  }

  toggleEdit(){
    this.setState({isEditing: !this.state.isEditing})
  }

  render(){
    const {location} = this.props;
    if(location.pathname === '/cats/new')
      return null;

    console.log('CatPage in render:', this.props, this.state);


    if(this.state.isDeleted){
        //this.props.history.push('/cats/');

        return(
          <Redirect push to={`/cats/`} />
        );

    }


    const cat = this.props.cat;
    const catHobbies = this.props.catHobbies;
    const checkBoxHobbies = this.props.checkBoxHobbies;

    if (this.state.isEditing){

      return (
        <div>
            <h1>Edit Cat</h1>
            <CatForm
              cat={cat}
              hobbies={checkBoxHobbies}
              onChange={this.updateCatState.bind(this)}
              onSave={this.saveCat.bind(this)}
              onHobbyChange={this.updateCatHobbies.bind(this)} />
        </div>
      );
    }

    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{cat.name}</h1>
        <p>breed: {cat.breed}</p>
        <p>weight: {cat.weight}</p>
        <p>temperament: {cat.temperament}</p>

        <HobbyList hobbies={catHobbies} />

        <button onClick={this.toggleEdit}
          className="btn btn-default">edit</button>

          <button onClick={this.deleteCat}
            className="btn btn-danger">delete</button>
      </div>
    );

  }
}



function collectCatHobbies(hobbies, cat){
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0)
    return hobby;
  })

  return selected.filter(el => el !== undefined)

}

function mapStateToProps(state, ownProps){
  const stateHobbies = Object.assign([], state.hobbies);
  let cat = { name: '', breed: '', weight: '', temperament: '',
      hobby_ids: []
    };
  let catHobbies = [];
  let checkBoxHobbies = [];

  //console.log('stateHobbies:', stateHobbies);
  const catId = ownProps.match.params.id;
  console.log('catId in mapStateToProps:', catId, state);


  if (state.cats.length > 0 && state.hobbies.length > 0){
    const catx = state.cats.find(cat => cat.id == catId);
    //console.log('catx:', catx);
    cat = Object.assign(cat, catx);
    //console.log('cat:', cat);
    if(cat.id && cat.hobby_ids.length > 0){
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
      catHobbies = collectCatHobbies(state.hobbies, cat)

    }else{
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies)
    }
  }
  //console.log('catHobbies cat:', catHobbies, 'checkBoxHobbies:', checkBoxHobbies);
  return {cat: cat, checkBoxHobbies: checkBoxHobbies,
    catHobbies: catHobbies, isDeleted: state.catDelete,
  };

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CatPage);
