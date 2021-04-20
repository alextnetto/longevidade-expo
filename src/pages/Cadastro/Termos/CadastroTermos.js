import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroTermos(props) {
    const { navigate } = useNavigation()
    
    function handleNavigateToCadastroSms() {
        navigate('Sms', state)
    }

    const [ state, setState ] = useState({
        ...props.route.params,
    })
    
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