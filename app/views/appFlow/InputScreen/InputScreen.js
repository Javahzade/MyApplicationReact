import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { titleStyle } from '../../../components/titleStyle';
import { connect } from 'react-redux';
import { saveUser, logUser } from '../../../modules/redux/action';


const InputScreen = (props) => {
  const [mail1, setMailFunc] = useState('');
  const [password1, setPasswordFunc] = useState('');
  const {
    imgCont,
    logo,
    sMail,
    sPassword,
    userCont,
    enter,
    create,
    forgot,
    text,
  } = titleStyle;

  const onPress = () => {
    const { mail, password } = props
    if (mail1 && password1) {
      if (mail == mail1 && password == password1) {  
        props.saveUser(true);
      } else {
        return alert('Ваш Username или Userpassword неправильный');
      }
    } else {
      return alert('Введите Username или Userpassword');
    }
  };

  const onRegistr = () => {
    props.logUser(mail1, password1);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={imgCont}>
        <Image
          style={logo}
          source={require('../../../src/img/messenger_logo.png')}
        />
      </View>
      <KeyboardAvoidingView behavior="height" enabled={false} style={userCont}>
        <TextInput
          style={sMail}
          onChangeText={str=>setMailFunc(str)}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={sPassword}
          onChangeText={str=>setPasswordFunc(str)}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={onPress} style={enter}>
          <Text style={text}>ВОЙТИ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRegistr} style={create}>
          <Text style={text}>СОЗДАТЬ НОВЫЙ АККАУНТ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={forgot}>
          <Text style={[text, { color: 'black' }]}>ЗАБЫЛИ ПАРОЛЬ?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    mail: state.mail,
    password: state.password,
  };

};
const mapDispatchToProps = dispatch => {
  return {
    saveUser: account => dispatch(saveUser(account)),
    logUser: (mailInput, passwordInput) => dispatch(logUser(mailInput, passwordInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputScreen);
