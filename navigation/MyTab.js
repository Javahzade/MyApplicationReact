import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNav} from '../component/Title/style/tabNavStyle';
import {chatScreen} from '../views/chatScreen';
import {contactScreen} from '../views/contactScreen';

const Tab = createBottomTabNavigator();

export const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={chatScreen} />
      <Tab.Screen name="Contacts" component={contactScreen} />
    </Tab.Navigator>
  );
};
