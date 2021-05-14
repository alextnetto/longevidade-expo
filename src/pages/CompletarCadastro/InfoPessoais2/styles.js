import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    body: {
      marginTop: 50,
      alignItems: 'center',
      flex: 1,
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
        marginTop: 50,
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
      marginTop: 30,
    },
    warningText: {
      fontSize: 16,
      width: 300,
      color: 'red',
      textAlign: 'center',
      marginTop: 30
    }
});
  
export default styles; 