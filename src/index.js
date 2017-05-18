import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
//import { BrowserRouter as Router, browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import {routes, RouteWithSubRoutes} from './routes';
import { loadCats } from './actions/catActions';
import { loadHobbies } from './actions/hobbyActions';

//import HomePage from './components/home/HomePage';
//import Header from './components/common/Header';

const store= configureStore();
store.dispatch(loadCats());
store.dispatch(loadHobbies());

console.log("routes:", routes);





ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>


      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
  
    </div>
  </Router>
</Provider>,
  document.getElementById('root')
);
