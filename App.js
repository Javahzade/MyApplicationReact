import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Entry from './component/Title/Entry';
import MainScreen from './component/MainScreen';
import {MyTab} from './navigation/MyTab';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      a: 6,
    };
  }

  onPress = () => {
    const mail = 'admin';
    const pass = 'admin';
    const {email, password} = this.state;
    if (email && password) {
      if (mail == email && pass == password) {
        this.setState({
          a: 5,
        });
      } else {
      }
    } else {
      return alert('vvedite dannie');
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
    const {email, password, a} = this.state;
    switch (a) {
      case 5:
        return <MainScreen />;
      default:
        return (
          <SafeAreaView style={{flex: 1}}>
            <Entry
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
