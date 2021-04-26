import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroSms(props) {
    const { navigate } = useNavigation()
    
    function handleNavigateToLoginPage() {
        navigate('CadastroRealizado', state)
    }
    function handleGoBack() {
        navigate('Senha', props.route.params)
    }

    const [ state, setState ] = useState({
        ...props.route.params
    })

    return(
        <View style={styles.container}>
            <Text style={styles.title}> SMS </Text>
            <TextInput 
              keyboardType='numeric'
              placeholder='oi'
            />
            <ButtonCadastro 
                handlerNext={handleNavigateToLoginPage}
                handlerBack={handleGoBack}
                text='Próximo'/>
        </View>
    ) 
}

export default CadastroSms;