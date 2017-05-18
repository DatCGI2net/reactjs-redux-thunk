//src/components/cats/CatPage

import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {RouteWithSubRoutes} from '../../routes';
import CatList from './CatList';
import {Link} from 'react-router-dom';



class CatsPage extends React.Component {
  render(){
    const cats = this.props.cats;

    return (
      <div className="col-md-12">
        <h1>Cats
          <Link className="btn btn-primary" to={'/cats/new'}>+ cat</Link>
        </h1>

        <div className="col-md-4">
          <CatList cats={cats} />
        </div>
        <div className="col-md-8">
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </div>

    );
  }
}


CatsPage.propTypes = {
  cats: PropTypes.array.isRequired,

};

function mapStateToProps(state, ownProps){
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);
