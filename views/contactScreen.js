import React from 'react';
import {Text, View, Button} from 'react-native';

export const contactScreen = ({navigation, route}) => {
  /* () => navigation.setOptions({title: 'Details'}) */
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MyContactScreen</Text>
    </View>
  );
};
