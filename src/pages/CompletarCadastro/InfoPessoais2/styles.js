import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
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
      fontSize: 27,
      marginTop: 40
    },
    inputContainer: {
      marginTop: 20,
      width: 350
    },
    inputTitle: {
        marginTop: 30,
        fontSize: 25
    },
    inputNascimento: {
        marginVertical: 20,
    },
    input: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      fontSize: 23,
      marginVertical: 20,
      paddingLeft: 10,
    },
    buttonContainer: {
      marginTop: 20,
    },
    warningText: {
      fontSize: 16,
      width: 300,
      color: 'red',
      textAlign: 'center',
      marginTop: 20
    }
});
  
export default styles; 