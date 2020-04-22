import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabStyle} from '../../components/tabBarStyle';
import {chatScreen} from '../../views/appFlow/chatScreen/chatScreen';
import {contactScreen} from '../../views/appFlow/contactScreen/contactScreen';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator style={tabStyle.container}>
      <Tab.Screen name="Chat" component={chatScreen} />
      <Tab.Screen name="Contacts" component={contactScreen} />
    </Tab.Navigator>
  );
};
