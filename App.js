import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Entry from './component/Title/Entry';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onPress = () => {
    const mail = 'admin';
    const pass = 'admin';
    const {email, password} = this.state;
    if (email&&password){
    if (mail == email && pass == password) {
      console.log('Success');
    }else {
      alert('Username or password is wrong!');
    }
  }else return alert('vvedite dannie')
}

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
    const {email, password} = this.state;
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
