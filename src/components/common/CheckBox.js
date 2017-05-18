// src/components/common/Header.js

import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {

  render(){
    const props = this.props;
    const item = props.item;

    return (


        <div className="checkbox-inline">
        <label >

          <input
            type="checkbox"
            name={item.name}
            value={item.id}
            checked={item.checked}
            onChange={props.handleChange} />
             {this.props.item.name}</label>
        </div>


    );
  }




};
CheckBox.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,

}

export default CheckBox;
