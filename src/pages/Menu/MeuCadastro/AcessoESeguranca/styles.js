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
    fontSize: 30,
    color: 'black',
    justifyContent: 'center',
    margin: '10%'
  },
  inputContainer: {
    justifyContent: 'center',
  },
  inputTitle: {
    marginTop: '3%',
    fontSize: 24,
    justifyContent: 'center'
  },
  input: {
    marginTop: '6%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200,
    fontSize: 23
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%'
  },
  switchText: {
    fontSize: 20,
    marginLeft: 7,
  },
  button: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 22,
    color: '#000',
  },
  warningText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: '2%'
  }
});

export default styles;