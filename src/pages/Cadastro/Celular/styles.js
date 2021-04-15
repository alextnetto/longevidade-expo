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
    }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: 200,
    alignSelf: 'center',
    },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    alignSelf: 'center'
  },
})

export {
  styles,
  pickerSelectStyles
}