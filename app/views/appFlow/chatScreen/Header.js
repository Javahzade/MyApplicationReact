import React from 'react';
import {Text, View, TouchableOpacity, Image, ShadowPropTypesIOS} from 'react-native';
import {headerStyle} from './style';
import {connect} from 'react-redux';


const Header = (props) => {
  const {container, img, text} = headerStyle;
  const {mail} =props;
  const upper = mail.charAt(0).toUpperCase() + mail.substring(1);

  return (
    <View style={container}>
      <TouchableOpacity>
        <Image
          style={img}
          source={require('../../../src/img/profile_image.jpg')}
        />
      </TouchableOpacity>
      <View>
        <Text style={text}>{upper} / Чаты</Text>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    mail: state.mail
  };
};

export default connect(
  mapStateToProps, null
)(Header);



