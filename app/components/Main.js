// ======================================================================================================
//
// Main Layout
//
// ======================================================================================================

// --------------------------------------------------
// Import Modules
// --------------------------------------------------

import React            from 'react';
import { RouteHandler } from 'react-router';
import Navigation       from './Navigation.js';

// --------------------------------------------------
// Create Main Layout Component
// --------------------------------------------------

class Main extends React.Component{
  render() {
    return (
      <div>
        <Navigation/>
        <RouteHandler/>
      </div>
    );
  }
}

// --------------------------------------------------
// Exports
// --------------------------------------------------

export default Main;
