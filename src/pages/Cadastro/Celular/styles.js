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
      fontSize: 23
    },
    selectContainer: {
      marginTop: 60
    },
    selectTitle: {
      fontSize: 16,
      marginBottom: 10
    },
    warningText: {
      fontSize: 16,
      width: 300,
      color: 'red',
      textAlign: 'center',
      marginTop: 80
    }
});

export default styles;