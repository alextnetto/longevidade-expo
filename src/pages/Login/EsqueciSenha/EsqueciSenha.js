import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import NavigationButton from '../../../components/NavigationButton/NavigationButton';
import styles from './styles'
import Backend from '../../../services/back'

function EsqueciSenha(props) {
    const [ state, setState ] = useState({
        celularMask: props.route.params.celularMask,
        celularValue: props.route.params.celularValue
    })
    const [ aviso, setAviso ] = useState('')
    const [ spinner, setSpinner ] = useState(false)

    const { navigate } = useNavigation()
    async function handleNext() {
        setSpinner(true)
        const api = new Backend()
        const smsEnviado = await api.esqueciSenhaSms(state)
        setSpinner(false)
        if (smsEnviado) {
            console.log('Front: SMS enviado')
            navigate('RedefinirSenhaSms', state)
        } else {
            setAviso('Celular não cadastrado')
        }
    }
    function handleGoBack() {
        navigate('Login', props.route.params)
    }
    function handleError() {
        if (state.celularValue.length === 0) {
            setAviso('Informe o número do seu celular.')
        } else if (!validCelular()) {
            setAviso('O número do celular não foi digitado corretamente. Verifique e tente novamente.')
        }
    }
    function handleCelularChange(value) {
        const mask = '(99) 9 9999-9999'
        setState({
            ...state,
            celularValue: unMask(value),
            celularMask: masker(value, mask)
        })
    }

    function validCelular() {
        return state.celularValue.length === 11
    }
    var buttonLogin
    if (validCelular()) {
        buttonLogin = <View style={styles.buttonContainer}>
            <RectButton onPress={handleGoBack} style={styles.buttonBack}>
            <Text style={styles.buttonText}> Voltar </Text>
            </RectButton>
            <RectButton onPress={handleNext} style={styles.buttonLogin}>
                <Text style={styles.buttonText}> Logar </Text>
            </RectButton>
        </View>
    } else {
        buttonLogin = <View style={styles.buttonContainer}>
                <RectButton onPress={handleGoBack} style={styles.buttonBack}>
                <Text style={styles.buttonText}> Voltar </Text>
                </RectButton>
                <RectButton onPress={handleError} style={{...styles.buttonLogin, opacity:0.5}}>
                    <Text style={styles.buttonText}> Logar </Text>
                </RectButton>
            </View>
    }
    
    return(
        <View style={styles.container}>
            <Spinner
                visible={spinner}
                textContent={'Carregando...'}
                textStyle={styles.spinnerTextStyle}
            />
            <HeaderCadastro />
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Esqueci Senha </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Celular'
                        value={state.celularMask}
                        onChangeText={handleCelularChange}
                        maxLength={16}
                    />
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
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

export default EsqueciSenha;