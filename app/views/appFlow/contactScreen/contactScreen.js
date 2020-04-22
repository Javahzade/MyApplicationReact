import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Contacts } from '../../../components/FlatListContactScreen/index';
import { contactStyle } from './style';
import { chatData } from '../../../src/assets/chats.json';

export const chatScreen = () => {
  const { container, img, title, search, chatImg, chatTitle } = contactStyle;
  const data = chatData
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../../src/img/profile_image.jpg')}
          style={img}
        />
        <Text style={title}>Чаты</Text>
      </View>
      <View>
        <TextInput
          onChangeText={text => SearchToChat(text)}
          placeholder="Поиск"
          style={search}
        />
      </View>
      <FlatList 
      style={container}
      data={data}
      renderItem={({item}) => {
        return (
          <Contacts item={item} />
        )
      }
    }
    keyExtractor={item => item.name}
    />
    </View>
  );
};

