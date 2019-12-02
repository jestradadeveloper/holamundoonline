import React from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit:true,
      email:'',
      password:'',
      value: ''
    };

    const style = {
      margin: '0.5em',
      paddingLeft: 0,
      listStyle: 'none'
    };
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  enableSubmitBtn(){
    this.setState({canSubmit:true});
  }
  disableBtn(){
    this.setState({canSubmit:false});
  }
  render() {
    return (
      <Formsy.form onValid={()=>this.enableSubmitBtn} onInvalid={()=>this.disableSubmitBtn} onSubmit={this.handleSubmit}>
 
       
        <RaisedButton disabled={!this.state.canSubmit}
        type="submit"
        label="Iniciar Sesion"/>
      </Formsy.form>
    );

  }
}