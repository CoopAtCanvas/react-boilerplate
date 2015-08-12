// --------------------------------------------------
// Import Modules
// --------------------------------------------------
import scss       from './scss/app.scss';
import React      from 'react';
import Router     from 'react-router';
import routes     from './config/routes';

// --------------------------------------------------
// Render Router Component
// --------------------------------------------------

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
