import React, { Component } from 'react';

class JBTextInput extends React.Component  {
  render() {
      return <input type="text" onChange={this.props.update} />
  }
}

export default JBTextInput;
