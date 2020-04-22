import React from 'react';
import {View, Image, Text} from 'react-native';
import {chatStyle} from '../../views/appFlow/chatScreen/style';

export const Chats = ({item}) => {
  const {chatImg, chatTitle, chatText} = chatStyle;
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={{uri: item.image}} style={chatImg} />
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={chatTitle}>{item.name}</Text>
        <Text style={chatText}>{item.chat}</Text>
      </View>
    </View>
  );
};
