import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {titleStyle} from '../../../components/titleStyle';

const InputScreen = props => {
  const {
    imgCont,
    logo,
    mail,
    pass,
    userCont,
    enter,
    create,
    forgot,
    text,
  } = titleStyle;
  const {password, email, mailType, passType, onPress} = props;
  return (
    <View style={{flex: 1}}>
      <View style={imgCont}>
        <Image
          style={logo}
          source={require('../../../src/img/messenger_logo.png')}
        />
      </View>
      <KeyboardAvoidingView behavior="height" enabled={false} style={userCont}>
        <TextInput
          style={mail}
          onChangeText={str => mailType(str)}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={pass}
          onChangeText={str => passType(str)}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={onPress} style={enter}>
          <Text style={text}>ВОЙТИ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={create}>
          <Text style={text}>СОЗДАТЬ НОВЫЙ АККАУНТ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={forgot}>
          <Text style={[text, {color: 'black'}]}>ЗАБЫЛИ ПАРОЛЬ?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
export default InputScreen;
