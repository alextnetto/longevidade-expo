import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    header: {
      marginTop: 40,
      height: 70,
    },
    title: {
      fontSize: 27,
      marginTop: 10,
      color: 'black'
    },
    body: {
      marginTop: 70,
      alignItems: 'center',
      flex: 1,
    },
    scrollContainer: {
      width: 300,
      height: 400,
      padding: 20,
      borderWidth: 1,
      borderRadius: 10
    },
    checkBox: {
      marginTop: 30,
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