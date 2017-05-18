import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render(){
    const {location} = this.props;

    if(location.pathname === '/')
      return (
      <div className="jumbotron">
        <h1>Cat book</h1>
        <p>The best way manage your cat collections.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more </Link>
        

      </div>

    )
    else {
      return null
      }


  }
}

export default HomePage;
