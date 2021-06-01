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
    linha1: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    linha2: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    inputUf: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      width: 50,
      fontSize: 23,
      marginVertical: 20,
      paddingLeft: 10,
    },
    inputCidade: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      width: 270,
      fontSize: 23,
      marginVertical: 20,
      paddingLeft: 10,
    },
    inputNumero: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      width: 100,
      fontSize: 23,
      marginVertical: 20,
      paddingLeft: 10,
    },
    inputComplemento: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      width: 220,
      fontSize: 23,
      marginVertical: 20,
      paddingLeft: 10,
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