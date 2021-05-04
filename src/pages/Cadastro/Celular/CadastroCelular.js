import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroCelular() {
    const { navigate } = useNavigation()
    function handleNavigateToCadastroSenha() {
        navigate('Senha', state)
    }
    function handleGoBack() {
        navigate('Landing')
    }
    function handleCelularChange(value) {
        const mask = '(99) 9 9999-9999'
        setState({
            celularValue: unMask(value),
            celularMask: masker(value, mask)
        })
    }
    function handleError() {
        if (state.celularValue.length === 0) {
            
            setTexts({avisoCelular: 'Informe o número do seu celular.'})
        } else {
            setTexts({avisoCelular: 'O número do celular não foi digitado corretamente. Verifique e tente novamente.'})
        }
    }
    
    const [ state, setState ] = useState({
        celularMask: '',
        celularValue: '',
    })
    const [ texts, setTexts ] = useState({
        avisoCelular: ''
    })

    var buttonCadastro
    if (state.celularValue.length === 11) {
        buttonCadastro = <ButtonCadastro 
            handlerNext={handleNavigateToCadastroSenha}
            handlerBack={handleGoBack}
            text='Próximo'/>
    } else {
        buttonCadastro = <ButtonCadastro 
            handlerNext={handleError}
            handlerBack={handleGoBack} 
            text='Próximo'
            style={{opacity:0.5}}/>
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Celular </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='(__) _ ____-____'
                value={state.celularMask}
                onChangeText={handleCelularChange}
                maxLength={16}
            />
            <Text style={styles.warningText}>
                {texts.avisoCelular}
            </Text>
            {buttonCadastro}
        </View>
    ) 
}

export default CadastroCelular;