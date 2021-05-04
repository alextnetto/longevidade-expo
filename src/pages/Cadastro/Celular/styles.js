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
    color: 'black'
  },
  body: {
    marginTop: 70,
    alignItems: 'center',
    flex: 1,
  },
  input: {
    marginTop: 200,
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
    marginTop: 100
  }
});

export default styles;