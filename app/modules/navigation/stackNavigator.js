import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {messageScreen} from '../../views/appFlow/messageScreen/messageScreen';
import {TabBar} from '../navigation/tabBarNavigator';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabBar">
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="Чат"
        component={messageScreen}
        options={() => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
};
