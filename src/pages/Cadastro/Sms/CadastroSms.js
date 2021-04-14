import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroSms() {
    const { navigate } = useNavigation()
    
    function handleNavigateToLoginPage() {
        navigate('Login')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}> SMS </Text>
            <TextInput 
              keyboardType='numeric'
              placeholder='oi'
            />
            <ButtonCadastro handler={handleNavigateToLoginPage} text='Próximo'/>

        </View>
    ) 
}

export default CadastroSms;