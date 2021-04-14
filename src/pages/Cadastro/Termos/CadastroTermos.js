import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroTermos() {
    const { navigate } = useNavigation()
    
    function handleNavigateToCadastroSms() {
        navigate('Sms')
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Termos </Text>
            <TextInput 
              keyboardType='numeric'
              placeholder='oi'
            />
            <ButtonCadastro handler={handleNavigateToCadastroSms} text='Próximo'/>

        </View>
    ) 
}

export default CadastroTermos;