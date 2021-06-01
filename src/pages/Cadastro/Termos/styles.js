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
  },
  scrollContainer: {
    width: 300,
    height: '85%',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  checkBox: {
    backgroundColor: 'white',
    borderWidth: 0
  },
  warningText: {
    fontSize: 16,
    width: 300,
    color: 'red',
    textAlign: 'center'
  }
  });
  
export default styles; 