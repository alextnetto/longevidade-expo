import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'

import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../services/back'

function Login() {
    const [ state, setState ] = useState({
        celularMask: '',
        celularValue: '',
        senha: ''
    })
    const [ aviso, setAviso ] = useState('')

    const { navigate } = useNavigation()
    async function handleLogin() {
        const api = new Backend()
        const logged = await api.login(state)
        console.log(logged)
        if (logged) {
            console.log('Front: Logado')
            alert('Logado')
        } else {
            setAviso('Celular não cadastrado ou senha incorreta')
        }
    }
    function handleGoBack() {
        navigate('EsqueciSenha')
    }
    function handleEsqueciSenha() {
        navigate('EsqueciSenha')
    }
   
    function handleError() {
        if (state.celularValue.length === 0) {
            setAviso('Informe o número do seu celular.')
        } else if (!validateCelular()) {
            setAviso('O número do celular não foi digitado corretamente. Verifique e tente novamente.')
        } else if (state.senha.length === 0) {
            setAviso('Informe a sua senha de acesso')
        } else if (!validateSenha()) {
            setAviso('Senha incompleta')
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

    var buttonLogin
    if (validateCelular() && validateSenha()) {
        buttonLogin = <View style={styles.buttonContainer}>
            <RectButton onPress={handleGoBack} style={styles.buttonBack}>
            <Text style={styles.buttonText}> Voltar </Text>
            </RectButton>
            <RectButton onPress={handleLogin} style={styles.buttonLogin}>
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
                {buttonLogin}
            </View>
        </View>
    ) 
}

export default Login;