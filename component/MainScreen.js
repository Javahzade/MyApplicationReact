import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyTab} from '../navigation/MyTab';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    );
  }
}
export default MainScreen;
