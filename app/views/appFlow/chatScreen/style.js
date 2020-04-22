import {StyleSheet} from 'react-native';

export const chatStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  img: {
    borderRadius: 50,
    width: 40,
    height: 40,
    margin: 15,
  },
  search: {
    flexDirection: 'column',
    borderRadius: 20,
    fontSize: 14,
    height: 35,
    margin: 15,
    marginTop: 0,
    backgroundColor: '#d4d4d4',
  },
  chatImg: {
    borderRadius: 50,
    width: 60,
    height: 60,
    margin: 15,
  },
  chatTitle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'normal',
  },
});
