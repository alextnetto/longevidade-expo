import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  titleContainer: {
    height: '15%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: 'black',
    justifyContent: 'center',
  },
  body: {
    height: '87%',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    height: '40%',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200,
    fontSize: 23
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  buttonBack: {
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 50
  },
  esqueciSenha: {
    marginTop: 10,
    width: '100%',
  },
  esqueciSenhaText: {
    textDecorationLine: 'underline',
  },
  buttonLogin: {
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 50
  },
  buttonText: {
      fontSize: 25,
      color: '#fff',
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