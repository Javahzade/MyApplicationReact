import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {chatStyle} from './style';

export const chatScreen = () => {
  const {container, img, title, search, chatImg, chatTitle} = chatStyle;
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../../src/img/profile_image.jpg')}
          style={img}
        />
        <Text style={title}>Chats</Text>
      </View>
      <View>
        <TextInput
          onChangeText={text => SearchToChat(text)}
          placeholder="Search"
          style={search}
        />
      </View>
      <ScrollView style={container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../src/img/profile_image.jpg')}
            style={chatImg}
          />
          <Text style={chatTitle}>Guest</Text>
        </View>
      </ScrollView>
    </View>
  );
};
