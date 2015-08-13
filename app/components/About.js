import React      from 'react';
import HelloSayer from './HelloSayer.js';

class About extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: 'about'
    };
  }

  render() {
    return (<div className="hello-form">
      <input type="text" onChange={this.onChange} />
      <HelloSayer name={this.state.name} />
    </div>);
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }
}

export default About;
