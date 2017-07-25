import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import JBTextInput from '../common/textInput';
import JBTextArea from '../common/textArea';
import JBRaisedButton from '../common/raisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as JBEntryActions from '../../actions/JBEntryAction';
import {bindActionCreators} from 'redux';

class JobForm extends Component {
  constructor(){
    super();
    // this.state = ({jobNote:{
    //   firstName:'',
    //   notes:'',
    //   email:'',
    //   phoneNumber:''
    // }});
    this.update = this.update.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  update(){

  }

  buttonClicked(){

  }

  handleFormSubmit(e){
    e.preventDefault();

    this.props.actions.createJobNote({
      firstName:ReactDOM.findDOMNode(this.fName).value,
      note:ReactDOM.findDOMNode(this.notes).value,
      email:ReactDOM.findDOMNode(this.email).value,
      phoneNumber:ReactDOM.findDOMNode(this.phone).value
    })

    this.resetFormFields()
  }


  resetFormFields = () => {
    ReactDOM.findDOMNode(this.fName).value = ''
    ReactDOM.findDOMNode(this.notes).value = ''
    ReactDOM.findDOMNode(this.email).value = ''
    ReactDOM.findDOMNode(this.phone).value = ''
  }

  render() {
    //console.log(recuriterNotes);
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
          {this.props.recuriterNotes.length}
          {this.props.recuriterNotes.map(n =>
            <li key={n.firstName}>
                {n.phoneNumber},{n.firstName}
            </li>)
        }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(JBEntryActions, dispatch)
  };
}


const mapStateToProps = function(state) {
  return {recuriterNotes:state.recuriterNotes}
}

export default connect(mapStateToProps,mapDispatchToProps)(JobForm)
