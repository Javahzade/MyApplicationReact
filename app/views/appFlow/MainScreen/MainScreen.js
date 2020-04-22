import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabBar} from '../../../modules/navigation/tabBarNavigator';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    );
  }
}
