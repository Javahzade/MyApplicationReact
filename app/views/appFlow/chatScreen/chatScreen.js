import React from 'react';
import {View, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Header from './Header';
import {Chats} from '../../../components/FlatListChatScreen/index';
import {chatStyle} from './style';
import {chatData} from '../../../src/assets/chats.json';

export const chatScreen = ({navigation}) => {
  const {container, search} = chatStyle;
  const data = chatData;

  return (
    <View style={container}>
      <Header />
      <View>
        <TextInput placeholder="Поиск" style={search} />
      </View>
      <FlatList
        style={container}
        data={data}
        renderItem={({item}) => {
          return <Chats item={item} navigation={navigation} />;
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
