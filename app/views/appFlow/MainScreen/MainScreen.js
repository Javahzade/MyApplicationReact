import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from '../../../modules/navigation/stackNavigator';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}
