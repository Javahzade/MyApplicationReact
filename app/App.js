import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import InputScreen from './views/appFlow/InputScreen/InputScreen';
import MainScreen from './views/appFlow/MainScreen/MainScreen';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLogin: true,
    };
  }

  onPress = () => {
    const mail = 'admin';
    const pass = 'admin';
    const {email, password} = this.state;
    if (email && password) {
      if (mail == email && pass == password) {
        this.setState({
          isLogin: true,
        });
      } else {
        return alert('Ваш Username или Userpassword неправильный');
      }
    } else {
      return alert('Введите Username или Userpassword');
    }
  };

  mailType = str => {
    this.setState({
      email: str,
    });
  };

  passType = str => {
    this.setState({
      password: str,
    });
  };

  render() {
    const {email, password, isLogin} = this.state;
    switch (isLogin) {
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
              password={password}
            />
          </SafeAreaView>
        );
    }
  }
}
