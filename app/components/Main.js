// --------------------------------------------------
// Main Layout
// --------------------------------------------------

import React            from 'react';
import { RouteHandler } from 'react-router';
import Navigation       from './navigation.js'

// --------------------------------------------------
// Create Main Layout Component
// --------------------------------------------------

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <RouteHandler/>
      </div>
    );
  }
});

export default Main;
