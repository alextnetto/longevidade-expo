import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function CadastroCelular() {
    const [ state, setState ] = useState({
        celularMask: '',
        celularValue: '',
    })
    const [ aviso, setAviso ] = useState('')

    const { navigate } = useNavigation()
    function handleNext() {
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
            
            setAviso('Informe o número do seu celular.')
        } else {
            setAviso('O número do celular não foi digitado corretamente. Verifique e tente novamente.')
        }
    }

    function validCelular() {
        return state.celularValue.length === 11
    }

    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Celular </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='(__) _ ____-____'
                        value={state.celularMask}
                        onChangeText={handleCelularChange}
                        maxLength={16}
                    />
                </View>
                <Text style={styles.warningText}>
                    {aviso}
                </Text>
                <NavigationButton
                    isValid={validCelular()}
                    handleBack={handleGoBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Próximo'
                />
            </View>
        </View>
    ) 
}

export default CadastroCelular;