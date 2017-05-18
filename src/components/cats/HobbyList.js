//src/components/cats/CatList.js
import React from 'react'
import PropTypes from 'prop-types';

const HobbyList = ({hobbies}) => {
  return (
    <div>
    <h3>Hobbies</h3>
    <ul className="list-group">
      {hobbies.map(hobby =>
        <li  className="list-group-item" key={hobby.id}>
          {hobby.name}</li>

      )}
    </ul>
  </div>
  );
};

HobbyList.PropTypes = {
  hobbies: PropTypes.array.isRequired
}

export default HobbyList;
