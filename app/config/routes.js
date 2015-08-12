// --------------------------------------------------
// Import Modules
// --------------------------------------------------

import React         from 'react';
import Router        from 'react-router';
import {
       Route,
       DefaultRoute,
       RouteHandler
       }             from 'react-router';
import Main          from '../components/Main.js';
import About         from '../components/About.js';
import Feed          from '../components/Feed.js';
import Dashboard     from '../components/Dashboard.js';

// --------------------------------------------------
// Router Component
// --------------------------------------------------

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="about" handler={About}/>
    <Route name="feed" handler={Feed}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);
