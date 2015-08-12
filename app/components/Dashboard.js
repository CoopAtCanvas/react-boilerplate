import React      from 'react';
import HelloSayer from './HelloSayer.js';

var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      name: 'dashboard'
    };
  },

  render: function() {
    return (<div className="hello-form">
      <input type="text" onChange={this.onChange} />
      <HelloSayer name={this.state.name} />
    </div>);
  },

  onChange: function(e) {
    this.setState({
      name: e.target.value
    });
  }
});

export default Dashboard;
