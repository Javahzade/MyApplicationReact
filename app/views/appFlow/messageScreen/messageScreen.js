import React from 'react';
import {Text, View} from 'react-native';
import {messageStyle} from './style';
import Header from './Header';

export const messageScreen = ({route, navigation}) => {
  const {item} = route.params;
  const {container, message, messageView} = messageStyle;
  return (
    <View style={container}>
      <Header item={item} navigation={navigation} />
      <View style={messageView}>
        <Text style={message}>{item.chat}</Text>
      </View>
    </View>
  );
};
