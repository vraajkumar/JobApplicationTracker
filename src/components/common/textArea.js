import React from 'react';

class JBTextArea extends React.Component  {
  render() {
      return <textarea value={this.props.value} onChange={this.props.update} />
  }
}

export default JBTextArea;
