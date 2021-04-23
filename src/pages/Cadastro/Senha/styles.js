import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 27,
      position: 'absolute',
      top: 40,
    },
    input: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      width: 200,
      fontSize: 23,
      marginTop: 100
    },
    warningText: {
      fontSize: 20,
      color: 'red',
      marginTop: 40
    }
  });

export default styles;
