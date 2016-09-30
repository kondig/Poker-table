import React from 'react';
import './deck.css';

class CPerson extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: 'No Name',
      age: 1,
    };
  }
  render () {
    return (
      <div onClick={() => this.setState( {
        age: ++this.state.age,
      })}>
      {this.props.name} {this.state.age}
      </div>
    );
  }
}
export{
  CPerson,
};
