/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './app/modules/redux/storage';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
