import React from 'react';
import {View, Image, Text} from 'react-native';
import {chatStyle} from '../../views/appFlow/chatScreen/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Chats = ({item, navigation}) => {
  const {chatImg, chatTitle, chatText} = chatStyle;
  const goToChat = () => {
    navigation.navigate('Чат', {item: item});
  };
  if (item.chat !== '') {
    return (
      <TouchableOpacity
        onPress={() => goToChat()}
        style={{flexDirection: 'row'}}>
        <Image source={{uri: item.image}} style={chatImg} />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={chatTitle}>{item.name}</Text>
          <Text style={chatText}>{item.chat}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}} />
      </View>
    );
  }
};
