import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import ButtonCadastro from '../../../components/ButtonCadastro/ButtonCadastro'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function InfoPessoais1(props) {
    const { navigate } = useNavigation()
    function handleNavigateToCadastroTermos() {
        navigate('Termos', state)
    }
    function handleGoBack() {
        navigate('Celular', props.route.params)
    }
    
    const [ state, setState ] = useState({
        ...props.route.params,
        nome: '',
        cpf: '',
        email: ''
    })

    const [ texts, setTexts ] = useState({
        avisoNome: '',
        avisoCpf: '',
        avisoEmail: ''
    })

    function handleWrongPassword() {
        if (state.nome.length == 0) {
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

    function validateEmail(email) {

    }
    function validateCpf(cpf) {
        return true
    }
    function handleCpfChange(value) {
        const mask = '999.999.999-99'
        setState({
            celularValue: unMask(value),
            celularMask: masker(value, mask)
        })
    }
    var buttonCadastro
    if (true) {
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
            <HeaderCadastro />
            <View style={styles.body}>
                <Text style={styles.title}> Preencha as informações </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}> Nome completo </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) => setState({...state, nome: text})}
                    />
                    <Text style={styles.inputTitle}> Número de CPF </Text>
                    <TextInput 
                        placeholder='___.___.___-__'
                        keyboardType='numeric'
                        value={state.cpf}
                        onChangeText={handleCpfChange}
                        style={styles.input}
                        onChangeText={(text) => setState({...state, cpf: text})}
                    />
                    <Text style={styles.inputTitle}> Endereço de email </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(text) => setState({...state, email: text})}
                    />
                </View>
                <Text style={styles.warningText}> {texts.avisoSenha} </Text>
                {buttonCadastro}
            </View>
        </View>
    ) 
}

export default InfoPessoais1;