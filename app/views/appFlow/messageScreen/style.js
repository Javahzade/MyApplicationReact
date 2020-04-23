import {StyleSheet} from 'react-native';

export const messageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatText: {
    fontSize: 14,
    fontWeight: 'normal',
    opacity: 0.5,
  },
  message: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  messageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const headerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
