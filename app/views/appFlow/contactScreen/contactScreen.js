import React from 'react';
import {View, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Contacts} from '../../../components/FlatListContactScreen/index';
import {contactStyle} from './style';
import Header from './Header';
import {chatData} from '../../../src/assets/chats.json';

export const contactScreen = ({navigation}) => {
  const {container, search} = contactStyle;
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
          return <Contacts item={item} navigation={navigation} />;
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
