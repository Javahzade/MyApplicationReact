import React from 'react';
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
  console.log('redux>>>', props)
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


  let pass = '';
  let email = '';




  const onPress = () => {
    const { mail, password } = props
    if (email && pass) {
      if (mail == email && password == pass) {  
        props.saveUser(true);
      } else {
        return alert('Ваш Username или Userpassword неправильный');
      }
    } else {
      return alert('Введите Username или Userpassword');
    }
  };

  const onRegistr = () => {
    props.logUser(email, pass);
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
          onChangeText={str => email = str}

          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={sPassword}
          onChangeText={str => pass = str}

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

