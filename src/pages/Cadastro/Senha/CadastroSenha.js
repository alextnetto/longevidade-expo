import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroSenha() {
    const { navigate } = useNavigation()
    function handleNavigateToCadastroTermos() {
        navigate('Termos')
    }

    const [ state, setState ] = useState({
        senha1: '',
        senha2: ''
    })

    var buttonCadastro
    if (state.senha1.length !== 0 && state.senha1 === state.senha2) {
        buttonCadastro = <ButtonCadastro handler={handleNavigateToCadastroTermos} text='Próximo'/>
    } else {
        buttonCadastro = <ButtonCadastro text='Próximo' style={{opacity:0.5}}/>
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
            />
            <TextInput 
                keyboardType='numeric'
                placeholder='Confirme a senha'
                style={styles.input}
                onChangeText={(text) => setState({...state, senha2: text})}
                secureTextEntry
            />
            {buttonCadastro}
        </View>
    ) 
}

export default CadastroSenha;