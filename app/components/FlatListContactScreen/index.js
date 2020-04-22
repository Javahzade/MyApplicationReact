import React from 'react';
import {View, Image, Text} from 'react-native';
import {contactStyle} from '../../views/appFlow/contactScreen/style';

export const Contacts = ({item}) => {
  const {chatImg, chatTitle} = contactStyle;
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={{uri: item.image}} style={chatImg} />
      <Text style={chatTitle}>{item.name}</Text>
    </View>
  );
};
