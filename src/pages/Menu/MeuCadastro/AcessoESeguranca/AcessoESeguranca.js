import React, { useState } from 'react';
import { View, Text, Switch, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../../services/back'

function AcessoESeguranca(props) {
    const data = props.route.params
    const telefone = String(data.telefone.ddd + data.telefone.numero)
    const [ state, setState ] = useState({
        celularMask: masker(telefone, '(99) 9 9999-9999'),
        senhaAtual: '',
        senhaNova: '',
        senhaNova2: ''
    })
    const [ aviso, setAviso ] = useState('')
    const [ editar, setEditar ] = useState(false)
    const [ spinner, setSpinner ] = useState(false)

    const { navigate, goBack } = useNavigation()
    async function handleSaveSenha() {
        if (validSenha()) {
            const api = new Backend()
            setSpinner(true)
            const senhaRedefinida = await api.alterarSenha(state)
            setSpinner(false)
            if (senhaRedefinida) {
                setAviso('Senha redefinida')
            } else {
                setAviso('Houve algum erro na requisição')
            }
        }
    }
    function handleCelularChange(value) {
        const mask = '(99) 9 9999-9999'
        setState({
            celularValue: unMask(value),
            celularMask: masker(value, mask)
        })
    }
    function handleError() {
        if (valid()) {
            setAviso('Error')
        }
    }

    function validSenha() {
        if (state.senhaAtual.length !== 6) {
            setAviso('Sua senha atual deve conter 06 números.')
        } else if (state.senhaNova.length !== 6) {
            setAviso('Sua senha nova deve conter 06 números.')
        } else if (state.senhaNova !== state.senhaNova2) {
            setAviso('As novas senhas informadas não são iguais. Verifique e tente novamente.')
        } else {
            return true
        }
        return false
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
                    <Text style={styles.title}> Title </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}> Telefone </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='(__) _ ____-____'
                        value={state.celularMask}
                        onChangeText={handleCelularChange}
                        maxLength={16}
                        editable={editar}
                    />
                </View>
                <View style={styles.editContainer}>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#00a000" }}
                            thumbColor={editar ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {setEditar(!editar)}}
                            value={editar}
                        />
                        <Text style={styles.switchText}> Editar </Text>
                    </View>
                    <RectButton onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}> Salvar </Text>
                    </RectButton>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}> Alterar senha </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Senha atual'
                        value={state.senhaAtual}
                        onChangeText={(value) => {
                            setState({
                                ...state,
                                senhaAtual: value
                            })
                        }}
                        maxLength={6}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Senha nova'
                        value={state.senhaNova}
                        onChangeText={(value) => {
                            setState({
                                ...state,
                                senhaNova: value
                            })
                        }}
                        maxLength={6}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Confirme a senha'
                        value={state.senhaNova2}
                        onChangeText={(value) => {
                            setState({
                                ...state,
                                senhaNova2: value
                            })
                        }}
                        maxLength={6}
                        secureTextEntry
                    />
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <RectButton onPress={handleSaveSenha} style={styles.button}>
                    <Text style={styles.buttonText}> Salvar </Text>
                </RectButton>
                <RectButton onPress={goBack} style={styles.button}>
                    <Text style={styles.buttonText}> Voltar </Text>
                </RectButton>
            </View>
        </View>
    ) 
}

export default AcessoESeguranca;