import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CatsPage from './components/cats/CatsPage';
import CatPage from './components/cats/CatPage';
import NewCatPage from './components/cats/NewCatPage';

import Header from './components/common/Header';
import About from './components/About';
//console.log('HomePage:', HomePage);

export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export const routes = [


  { path: '/',
    component: App,

    routes: [


      { path: '/',
        component: Header,

      },
      { path: '/',
        component: HomePage,
        exact: true,
        strict: true,
      },
      { path: '/cats',
        component: CatsPage,
        routes: [{
          path: '/cats/:id',
          component: CatPage,
          exact: true,
          strict: true,
        },
        {path: '/cats/new',
        component: NewCatPage,
        exact: true,
        strict: true,
      },
        ]
      },
      { path: '/about',
        component: About,

      },
    ]
  }
];
