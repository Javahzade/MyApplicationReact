import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {headerStyle} from './style';

const Header = ({item, navigation}) => {
  const {container, button, img, text} = headerStyle;
  return (
    <View elevation={5} style={container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={button}
          source={require('../../../src/img/go_back_button.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={img} source={{uri: item.image}} />
      </TouchableOpacity>
      <View>
        <Text style={text}>{item.name}</Text>
      </View>
    </View>
  );
};

export default Header;
