import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from '../../../modules/navigation/stackNavigator';

export default class MainScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}
