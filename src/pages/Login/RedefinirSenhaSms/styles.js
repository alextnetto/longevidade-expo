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
    marginTop: '-8%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 33,
    color: 'black'
  },
  input: {
    marginTop: 200,
    fontSize: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 120,
    letterSpacing: 8,
    paddingStart: 10
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