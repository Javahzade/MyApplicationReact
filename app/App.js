import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import InputScreen from './views/appFlow/InputScreen/InputScreen';
import MainScreen from './views/appFlow/MainScreen/MainScreen';
import {connect} from 'react-redux';
import {saveUser} from './modules/redux/action';

var email;
var pass;

class App extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    const {mail, password} = this.props;
    console.log(email, pass);
    console.log(mail, password);
    if (mail && password) {
      if (mail == email && password == pass) {
        const account = {mail, password};
        this.props.saveUser({account});
      } else {
        return alert('Ваш Username или Userpassword неправильный');
      }
    } else {
      return alert('Введите Username или Userpassword');
    }
  };

  mailType = str => {
    email = str;
  };

  passType = str => {
    pass = str;
  };

  render() {
    switch (this.props.isLogin) {
      case true:
        return <MainScreen />;
      default:
        return (
          <SafeAreaView style={{flex: 1}}>
            <InputScreen
              mailType={this.mailType}
              passType={this.passType}
              onPress={this.onPress}
              email={email}
              password={pass}
            />
          </SafeAreaView>
        );
    }
  }
}
const mapStateToProps = state => {
  return {
    mail: state.mail,
    password: state.password,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: account => dispatch(saveUser(account)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
