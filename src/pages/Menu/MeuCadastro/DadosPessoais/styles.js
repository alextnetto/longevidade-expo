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
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200,
    fontSize: 23
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    fontSize: 25,
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