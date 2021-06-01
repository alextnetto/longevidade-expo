import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../services/back'
import NavigationButton from '../../../components/NavigationButton/NavigationButton';

function Login() {
    const [ state, setState ] = useState({
        celularMask: '',
        celularValue: '',
        senha: ''
    })
    const [ aviso, setAviso ] = useState('')
    const [ spinner, setSpinner ] = useState(false)

    const { navigate } = useNavigation()
    async function handleLogin() {
        setSpinner(true)
        const api = new Backend()
        const usuarioLogado = await api.login(state)
        setSpinner(false)
        if (usuarioLogado) {
            console.log('Front: Logado')
            navigate('Logado')
        } else {
            setAviso('Número do celular ou senha de acesso incorreta.')
        }
    }
    function handleGoBack() {
        navigate('Landing')
    }
    function handleEsqueciSenha() {
        navigate('EsqueciSenha', state)
    }
   
    function handleError() {
        if (state.celularValue.length === 0) {
            setAviso('Número do celular ou senha de acesso incorreta.')
        } else if (!validateCelular()) {
            setAviso('Número do celular ou senha de acesso incorreta.')
        } else if (state.senha.length === 0) {
            setAviso('Número do celular ou senha de acesso incorreta.')
        } else if (!validateSenha()) {
            setAviso('Número do celular ou senha de acesso incorreta.')
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

    function validateCelular() {
        return state.celularValue.length === 11
    }
    function validateSenha() {
        return state.senha.length === 6
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
                    <Text style={styles.title}> Login </Text>
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
                    <TextInput 
                        keyboardType='numeric'
                        placeholder='Senha'
                        style={styles.input}
                        onChangeText={(pswd) => setState({...state, senha: pswd})}
                        secureTextEntry
                        maxLength={6}
                    />
                    <RectButton onPress={handleEsqueciSenha} style={styles.esqueciSenha}>
                        <Text style={styles.esqueciSenhaText}> Esqueci senha </Text>
                    </RectButton>
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <NavigationButton
                    isValid={validateCelular() && validateSenha()}
                    handleBack={handleGoBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleLogin}
                    textNext='Logar'
                />
            </View>
        </View>
    ) 
}

export default Login;