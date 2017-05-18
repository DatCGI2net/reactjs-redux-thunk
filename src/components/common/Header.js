// src/components/common/Header.js

import React from 'react';
//import PropTypes from 'prop-types';
import {  NavLink  } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <header>
      <nav>
        <NavLink to="/"
          activeClassName="active">Home</NavLink>
          {" | "}
          <NavLink to="/cats" activeClassName="active">
          Cats</NavLink>
          {" | "}
          <NavLink to="/about" activeClassName="active">
          About</NavLink>
      </nav>
    </header>
    );
  }


}

export default Header;
