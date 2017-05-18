// src/components/App.js

import React from 'react'
import PropTypes from 'prop-types';
//import Header from './common/Header';
import {RouteWithSubRoutes } from '../routes';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">

        {this.props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

App.propTypes = {
  routes: PropTypes.array
}

export default App;
