import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginTop: 20,
    fontSize: 27,
    color: 'black'
  },
  body: {
    flex: 1,
    width: '100%',
    marginTop: '-8%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 70
  },
  inputTitle: {
    marginTop: 50,
    fontSize: 20
  },
  input: {
    marginTop: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200,
    fontSize: 23
  },
  warningText: {
    fontSize: 16,
    width: 300,
    color: 'red',
    textAlign: 'center',
    marginTop: 100
  }
  });
  
export default styles;