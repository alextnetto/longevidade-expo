import React, { useState } from 'react';
import { View, Text, Switch, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../../services/back'

function AcessoESeguranca() {
    const [ state, setState ] = useState({
        telefone: null,
        senhaAntiga: null,
        senhaNova: null,
        senhaNova2: null
    })
    const [ aviso, setAviso ] = useState('Error')
    const [ editar, setEditar ] = useState(false)
    const [ spinner, setSpinner ] = useState(false)

    const { navigate, goBack } = useNavigation()
    function handleNext() {
        navigate('Landing')
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

    function valid() {
        return true
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
                        value={state.telefone}
                        onChangeText={handleCelularChange}
                        maxLength={16}
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
                    <Text style={styles.inputTitle}> Senha </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Senha atual'
                        value={''}
                        onChangeText={() => {}}
                        maxLength={6}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Senha nova'
                        value={''}
                        onChangeText={() => {}}
                        maxLength={6}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Confirme a senha'
                        value={''}
                        onChangeText={() => {}}
                        maxLength={6}
                        secureTextEntry
                    />
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <RectButton onPress={() => {}} style={styles.button}>
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