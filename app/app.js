// --------------------------------------------------
// Import Modules
// --------------------------------------------------
import scss          from './scss/app.scss';
import React         from 'react';
import Router        from 'react-router';
import {
       Route,
       DefaultRoute,
       RouteHandler
       }             from 'react-router';
import About         from './views/about.js';
import Feed          from './views/feed.js';
import Dashboard     from './views/dashboard.js';
import Navigation    from './components/navigation.js'

// --------------------------------------------------
// Create App Compnent (Main Layout)
// --------------------------------------------------

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <RouteHandler/>
      </div>
    );
  }
});

// --------------------------------------------------
// Create Router Component
// --------------------------------------------------

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="feed" handler={Feed}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

// --------------------------------------------------
// Render Router Component
// --------------------------------------------------

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
