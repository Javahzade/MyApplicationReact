/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
  },
  input1: {
    borderWidth: 0.5,
    height: 40,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'gray',
  },
  input2: {
    borderWidth: 0.5,
    height: 40,
    borderTopColor: 'gray',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'white',
  },
  text1: {
    backgroundColor: '#006eff',
    color: 'white',
    height: 50,
  },
  text2: {
    backgroundColor: '#5bc73a',
    color: 'white',
    height: 50,
  },
  text3: {
    height: 50,
  },
});

class App extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.logo}
          source={require('./img/messenger_logo.png')}
        />
        <TextInput
          style={styles.input1}
          onChangeText={email => this.setState({email})}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input2}
          onChangeText={password => this.setState({password})}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Text style={styles.text1}>ВОЙТИ</Text>
        <Text style={styles.text2}>СОЗДАТЬ НОВЫЙ АККАУНТ</Text>
        <Text style={styles.text3}>Забыли пароль?</Text>
      </View>
    );
  }
}

export default App;
