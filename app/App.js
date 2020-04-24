import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import InputScreen from './views/appFlow/InputScreen/InputScreen';
import MainScreen from './views/appFlow/MainScreen/MainScreen';
import {connect} from 'react-redux';
import {saveUser} from './modules/redux/action';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.isLogin) {
      case true:
        return <MainScreen />;
      default:
        return (
          <SafeAreaView style={{flex: 1}}>
            <InputScreen
            />
          </SafeAreaView>
        );
    }
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.isLogin
  };
};


export default connect(
  mapStateToProps, null
)(App);
