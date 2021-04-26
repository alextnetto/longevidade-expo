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
                avisoSenha: 'Senhas não coincidem'
            })
        } else {
            setTexts({
                ...texts,
                avisoSenha: 'A senha precisa ser de 6 dígitos'
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
            <Text style={styles.title}> Senha </Text>
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
            <Text style={styles.warningText}> {texts.avisoSenha} </Text>
            {buttonCadastro}
        </View>
    ) 
}

export default CadastroSenha;