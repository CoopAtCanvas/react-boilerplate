import React      from 'react';
import HelloSayer from './HelloSayer.js';

var About = React.createClass({
  getInitialState: function() {
    return {
      name: 'about'
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

export default About;
