import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 27,
    color: 'black'
  },
  body: {
    marginTop: 70,
    alignItems: 'center',
    flex: 1,
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