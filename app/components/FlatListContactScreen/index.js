import React from 'react';
import {View, Image, Text} from 'react-native';
import {contactStyle} from '../../views/appFlow/contactScreen/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Contacts = ({item, navigation}) => {
  const {chatImg, chatTitle} = contactStyle;
  const goToChat = () => {
    navigation.navigate('Чат', {item: item});
  };
  return (
    <TouchableOpacity onPress={() => goToChat()}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: item.image}} style={chatImg} />
        <Text style={chatTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
