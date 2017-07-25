import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import JBTextInput from '../common/textInput';
import JBTextArea from '../common/textArea';
import JBRaisedButton from '../common/raisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class JBList extends Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  update(){

  }

  buttonClicked(){

  }

  handleFormSubmit(e){
    e.preventDefault();
    // store.dispatch({type:"ADD_NOTES",payload:{
    //   fName:ReactDOM.findDOMNode(this.fName).value,
    //   notes:ReactDOM.findDOMNode(this.notes).value,
    //   email:ReactDOM.findDOMNode(this.email).value,
    //   phone:ReactDOM.findDOMNode(this.phone).value
    // }});
    this.resetFormFields()
  }


  resetFormFields = () => {
    ReactDOM.findDOMNode(this.fName).value = ''
    ReactDOM.findDOMNode(this.notes).value = ''
    ReactDOM.findDOMNode(this.email).value = ''
    ReactDOM.findDOMNode(this.phone).value = ''
  }

  render() {
    //console.log(store.getState().recuriterNotes);
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React</h2>
        </div>
        <div>
          <form onSubmit={this.handleFormSubmit}>
          <label>
            Name :
            <JBTextInput ref={component => this.fName = component} update={this.update} />
          </label>
          <label>
            Email :
            <JBTextInput ref={component => this.email = component} update={this.update} />
          </label>
          <label>
            Phone :
            <JBTextInput ref={component => this.phone = component} update={this.update} />
          </label>
          <label>
            Notes:
            <JBTextArea ref = {component => this.notes = component} update={this.update} />
          </label>
            <MuiThemeProvider>
              <JBRaisedButton buttonClicked={this.handleFormSubmit}/>
            </MuiThemeProvider>

          </form>
        </div>
        <div>
          {/* {props.state.map(n =>
            <li key={n.phone}>
                {n.phone},{n.fName}
            </li>)
        } */}
        </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(catActions, dispatch)
//   };
// }


const mapStateToProps = function(state) {
  return {state}
}

export default connect(mapStateToProps)(JBList)
