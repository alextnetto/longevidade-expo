import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function CadastroSenha(props) {
    const { navigate, goBack } = useNavigation()
    function handleNext() {
        navigate('Termos', state)
    }
    
    const [ state, setState ] = useState({
        ...props.route.params,
        senha1: '',
        senha2: ''
    })

    const [ aviso, setAviso ] = useState()

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
            <HeaderCadastro />
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Senha </Text>
                </View>
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
                    handleBack={goBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Próximo'
                />
            </View>
        </View>
    ) 
}

export default CadastroSenha;