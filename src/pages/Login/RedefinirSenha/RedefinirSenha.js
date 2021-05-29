import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import Backend from '../../../services/back'
import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton';

function RedefinirSenha(props) {
    const [ state, setState ] = useState({
        ...props.route.params,
        senha1: '',
        senha2: ''
    })
    const [ aviso, setAviso ] = useState()
    const [ spinner, setSpinner ] = useState(false)

    const { navigate } = useNavigation()
    async function handleNext() {
        setSpinner(true)
        const api = new Backend()
        const redefinido = await api.redefinirSenha(state)
        setSpinner(false)
        if (redefinido) {
            navigate('Landing')
        } else {
            setAviso('Falha na requisição')
        }
    }
    function handleGoBack() {
        navigate('RedefinirSenhaSms', props.route.params)
    }
    function handleError() {
        if (state.senha1 !== state.senha2) {
            setAviso('As senhas informadas não são iguais. Verifique e tente novamente.')
        } else {
            setAviso('Sua senha deve conter 06 números.')
        }
    }
    
    function validSenha() {
        return state.senha1.length === 6 && state.senha1 === state.senha2
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
                <Text style={styles.title}> Redefinir senha </Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    keyboardType='numeric'
                    placeholder='Senha'
                    style={styles.input}
                    onChangeText={(text) => setState({...state, senha1: text})}
                    secureTextEntry
                    maxLength={6}
                    />
                    <TextInput 
                        keyboardType='numeric'
                        placeholder='Confirme a senha'
                        style={styles.input}
                        onChangeText={(text) => setState({...state, senha2: text})}
                        secureTextEntry
                        maxLength={6}
                    />
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <NavigationButton
                    isValid={validSenha()}
                    handleBack={handleGoBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Redefinir'
                />
            </View>
        </View>
    ) 
}

export default RedefinirSenha;