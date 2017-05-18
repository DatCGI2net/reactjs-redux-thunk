// src/components/cats/CatPage.js

import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as courseActions from '../../actions/catActions';
import HobbyList from './HobbyList';
import CatForm from './CatForm';
import { updateCatStateX, updateCatHobbiesX, hobbiesForCheckBoxes} from './Util';
import {Redirect} from 'react-router-dom';


class NewCatPage extends React.Component {
  static propTypes = {

     checkBoxHobbies: PropTypes.array.isRequired,
     actions: PropTypes.object.isRequired,
     newCatId: PropTypes.number.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      newCatId: 0,
      cat: {name:'',
        breed: '',
        weight: '',
        temperament: '',
        hobby_ids: []
      },
      saving: false,
      checkBoxHobbies: this.props.checkBoxHobbies,

    };
    this.updateCatState = updateCatStateX.bind(this);
    this.redirect = this.redirect.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.updateCatHobbies = updateCatHobbiesX.bind(this);


  }

  redirect(){

  }



  saveCat(event){
    event.preventDefault();
    //console.log('saving:', this.props.actions);
    this.props.actions.createCat(this.state.cat);
  }





  render(){
    const cat = this.state.cat;
    //const catHobbies = this.props.catHobbies;
    const checkBoxHobbies = this.props.checkBoxHobbies;
    console.log('NewCatPage render:', checkBoxHobbies
      ,'this.props.newCatId:', this.state.newCatId);

      if(this.state.newCatId && this.state.newCatId > 0){
        return(
          <Redirect push to={`/cats/${this.state.newCatId}`} />
        );
      }


      return (
        <div>
            <h1>Add Cat</h1>
            <CatForm
              cat={cat}
              hobbies={checkBoxHobbies}
              onChange={this.updateCatState.bind(this)}
              onSave={this.saveCat.bind(this)}
              onHobbyChange={this.updateCatHobbies} />
        </div>
      );


  }

  componentWillReceiveProps(nextProps){
    console.log('NewCatPage componentWillReceiveProps:', nextProps);
    this.setState({newCatId: nextProps.newCatId
      });
  }
}




function mapStateToProps(state, ownProps){

  let checkBoxHobbies = [];


  if (state.hobbies.length > 0){

      checkBoxHobbies = hobbiesForCheckBoxes(
        Object.assign([], state.hobbies));


  }
  const x = {checkBoxHobbies: checkBoxHobbies,
    newCatId: state.catredirect?state.catredirect:0,};

  console.log('x mapStateToProps:', x, 'state:', state);
  return x;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCatPage);
