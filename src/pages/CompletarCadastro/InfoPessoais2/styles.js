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
        fontSize: 20
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
    }
});
  
export default styles; 