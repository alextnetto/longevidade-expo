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
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    width: 300,
    height: 70,
    marginTop: 20,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
  }
});

export default styles;