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
    backgroundColor: '#be0000',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 27,
    color: 'white'
  },
  title: {
    fontSize: 27,
    marginTop: 100
  },
  text: {
    marginTop: 80,
    width: 300,
    fontSize: 20,
    textAlign: 'center',

  },
  buttonContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 70,
    marginTop: 50,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
  }
  });
  
export default styles; 