import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {headerStyle} from './style';

const Header = () => {
  const {container, img, text} = headerStyle;
  return (
    <View style={container}>
      <TouchableOpacity>
        <Image
          style={img}
          source={require('../../../src/img/profile_image.jpg')}
        />
      </TouchableOpacity>
      <View>
        <Text style={text}>Контакты</Text>
      </View>
    </View>
  );
};

export default Header;
