import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const JBRaisedButton = (props) => (
  <RaisedButton label="Submit" onClick={props.buttonClicked}/>
);

export default JBRaisedButton;
