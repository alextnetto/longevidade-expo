import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  body: {
    flex: 1,
    width: '100%',
    marginTop: -30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleContainer: {
    height: '13%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 27,
    color: 'black'
  },
  inputContainer: {
    height: '60%',
    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200,
    fontSize: 23,
  },
  warningText: {
    fontSize: 16,
    width: 300,
    color: 'red',
    textAlign: 'center',
  }
  });

export default styles;
