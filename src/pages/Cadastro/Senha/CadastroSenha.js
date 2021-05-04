import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroSenha(props) {
    const { navigate } = useNavigation()
    function handleNavigateToCadastroTermos() {
        navigate('Termos', state)
    }
    function handleGoBack() {
        navigate('Celular', props.route.params)
    }
    
    const [ state, setState ] = useState({
        ...props.route.params,
        senha1: '',
        senha2: ''
    })

    const [ texts, setTexts ] = useState({
        avisoSenha: ''
    })

    function handleWrongPassword() {
        if (state.senha1 !== state.senha2) {
            setTexts({
                ...texts,
                avisoSenha: 'As senhas informadas não são iguais. Verifique e tente novamente.'
            })
        } else {
            setTexts({
                ...texts,
                avisoSenha: 'Sua senha deve conter 06 números.'
            })
        }
    }
    
    var buttonCadastro
    if (state.senha1.length === 6 && state.senha1 === state.senha2) {
        buttonCadastro = <ButtonCadastro
                            handlerNext={handleNavigateToCadastroTermos}
                            handlerBack={handleGoBack}
                            text='Próximo'/>
    } else {
        buttonCadastro = <ButtonCadastro 
                            handlerNext={handleWrongPassword}
                            handlerBack={handleGoBack}
                            text='Próximo'
                            style={{opacity:0.5}}/>
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}> Longevidade +você </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}> Senha </Text>
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
                <Text style={styles.warningText}> {texts.avisoSenha} </Text>
                {buttonCadastro}
            </View>
        </View>
    ) 
}

export default CadastroSenha;