import {StyleSheet} from 'react-native';

export const contactStyle = StyleSheet.create({
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
    marginBottom: 0,
    marginTop: 5,
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
    fontWeight: 'bold',
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
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
