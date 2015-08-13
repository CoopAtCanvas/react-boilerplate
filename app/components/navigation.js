// --------------------------------------------------
// Site Main Navigation Component
// --------------------------------------------------

import React  from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component{
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="app">dashboard</Link></li>
          <li><Link to="about">about</Link></li>
          <li><Link to="feed">feed</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
