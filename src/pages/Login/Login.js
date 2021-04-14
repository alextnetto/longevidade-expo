import React from 'react';
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

function Login() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Login </Text>
            <TextInput 
              keyboardType='numeric'
              placeholder='usuario'
            />
            <TextInput 
            keyboardType='numeric'
            placeholder='senha'
            />
        </View>
    ) 
}

export default Login;