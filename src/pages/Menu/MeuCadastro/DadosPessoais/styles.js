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
      height: '12%',
      justifyContent: 'center'
  },
  title: {
      fontSize: 30,
      color: 'black',
      justifyContent: 'center',
  },
  inputContainer: {
    height: '60%',
    justifyContent: 'space-around',
  },
  inputTitle: {
    fontSize: 20
  },
  input: {
    marginTop: 20,
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
    fontSize: 23,
    marginLeft: 7,
  },
  warningText: {
    marginTop: '3%',
    fontSize: 20,
    color: 'red'
  },
  buttonContainer2: {
    flexDirection: 'row',
    marginTop: '7%',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20
  },
  buttonText: {
    fontSize: 23,
  }
});

export default styles;