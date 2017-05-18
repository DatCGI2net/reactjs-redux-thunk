//src/components/cats/CatList.js
import React from 'react'
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';


class CatForm extends React.Component {


  constructor(props) {
    super(props);

    //this.state = {};
    this.makeCheckBoxes = this.makeCheckBoxes.bind(this);

  }

  makeCheckBoxes(){
    const SELF = this;
    const checkboxes = this.props.hobbies.map(hobby => {
      return (
        <CheckBox
          item={hobby}
          handleChange={this.props.onHobbyChange}
          key={hobby.id} />

      );
    });

    return (
      <div className="form-group">
      {checkboxes}
    </div>);

  }

  render(){
    const boxes = this.makeCheckBoxes();
    const cat = this.props.cat;
    console.log('cat form:', cat);

    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={cat.name}
            onChange={this.props.onChange} />

            {boxes}

          <TextInput
            name="breed"
            label="breed"
            value={cat.breed}
            onChange={this.props.onChange} />
          <TextInput
            name="weight"
            label="weight"
            value={''+cat.weight}
            onChange={this.props.onChange} />

          <TextInput
            name="temperament"
            label="temperament"
            value={cat.temperament}
            onChange={this.props.onChange} />

            <input
              type="submit"
              disabled={this.props.saving}
              value={this.props.saving? 'Saving...': 'Save'}
              className="btn btn-primary"
              onClick={this.props.onSave} />

        </form>

      </div>

    );
  }

}

CatForm.PropTypes = {
 cat: PropTypes.array.isRequired,
 hobbies:PropTypes.array.isRequired,
 onSave:PropTypes.func.isRequired,
 onChange:PropTypes.func.isRequired,
 onHobbyChange:PropTypes.func.isRequired,

}



export default CatForm;
