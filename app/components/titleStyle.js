import {StyleSheet} from 'react-native';

export const titleStyle = StyleSheet.create({
  imgCont: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCont: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 130,
    height: 130,
  },
  mail: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  password: {
    height: 40,
  },
  enter: {
    backgroundColor: '#006eff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 15,
  },
  create: {
    backgroundColor: '#5bc73a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 15,
  },
  forgot: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
