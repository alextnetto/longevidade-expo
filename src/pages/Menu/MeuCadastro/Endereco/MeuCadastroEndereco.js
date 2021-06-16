import React, { useState } from 'react';
import { View, Text, Switch, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../../services/back'
import getCepData from '../../../../services/cep'

function MeuCadastroEndereco(props) {
    const data = props.route.params.endereco
    const [ state, setState ] = useState({
        bairro: data.bairro,
        cep: data.cep,
        cidade: data.cidade,
        complemento: data.complemento,
        estado: data.estado,
        logradouro: data.logradouro,
        numero: data.numero,
        pontoReferencia: data.pontoReferencia,
    })
    const [ editar, setEditar ] = useState(false)
    const [ aviso, setAviso ] = useState('')
    const [ spinner, setSpinner ] = useState(false)

    const { navigate, goBack } = useNavigation()
    function handleNext() {
        navigate('Landing')
    }
    function handleError() {
        if (valid()) {
            setAviso('Error')
        }
    }
    function handleSave() {
        var data = props.route.params
        data.endereco = state
        const api = new Backend()
        api.editarEnderecoPessoaFisica(data)
        return
    }

    async function handleCepChange(value) {
        const mask = '99999-999'
        if (value.length === 9) {
            setState({
                ...state,
                cep: masker(value, mask)
            })
            const data = await getCepData(unMask(value))
            setState({
                ...state,
                cep: masker(value, mask),
                bairro: data.bairro,
                cidade: data.localidade,
                logradouro: data.logradouro,
                estado: data.uf,
            })
        } else {
            setState({
                ...state,
                cep: masker(value, mask)
            })
        }
    }

    function handleError() {
        if (state.cep.length < 9) {
            setAviso('Informe o CEP do seu endereço.')
        } else if (state.numero.length === 0) {
            setAviso('Informe o número do endereço.')
        } else if (state.logradouro.length === 0) {
            setAviso('Informe o seu endereço. Exemplo (Av., Rua, Praça).')
        } else if (state.bairro.length === 0) {
            setAviso('Informe o bairro do seu endereço.')
        } else if (state.cidade.length === 0) {
            setAviso('Informe a cidade do seu endereço.')
        } else if (state.estado.length === 0) {
            setAviso('Informe o estado do seu endereço.')
        } else (
            handleSave()
        )
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
                    <Text style={styles.title}> Endereço </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input} 
                        keyboardType='numeric'
                        placeholder='CEP'
                        value={state.cep}
                        onChangeText={handleCepChange}
                        maxLength={9}
                        editable={editar}
                    />
                    <TextInput
                        style={styles.input} 
                        placeholder='Endereço'
                        value={state.logradouro}
                        onChangeText={(value) => setState({...state, logradouro: value})}
                        editable={editar}
                    />
                    <View style={styles.linha2}>
                        <TextInput
                            style={styles.inputNumero} 
                            keyboardType='numeric'
                            placeholder='Número'
                            value={state.numero}
                            onChangeText={(value) => setState({...state, numero: value})}
                            editable={editar}
                        />
                        <TextInput
                            style={styles.inputComplemento} 
                            placeholder='Complemento'
                            value={state.complemento}
                            onChangeText={(value) => setState({...state, complemento: value})}
                            editable={editar}
                        />
                    </View>
                    <TextInput
                        style={styles.input} 
                        placeholder='Bairro'
                        value={state.bairro}
                        onChangeText={(value) => setState({...state, bairro: value})}
                        editable={editar}
                    />
                    <View style={styles.linha1}>
                        <TextInput
                            style={styles.inputCidade} 
                            placeholder='Cidade'
                            value={state.cidade}
                            onChangeText={(value) => setState({...state, cidade: value})}
                            editable={editar}
                        />
                        <TextInput
                            style={styles.inputUf} 
                            placeholder='UF'
                            value={state.estado}
                            onChangeText={(value) => setState({...state, estado: value})}
                            editable={editar}
                        />
                    </View>
                    <TextInput
                        style={styles.input} 
                        placeholder='Ponto de referência'
                        value={state.pontoReferencia}
                        onChangeText={(value) => setState({...state, pontoReferencia: value})}
                        editable={editar}
                    />
                </View>
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
                <Text style={styles.warningText}> {aviso} </Text>
                <View style={styles.buttonContainer}>
                    <RectButton style={styles.button} onPress={goBack}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleError}>
                        <Text style={styles.buttonText}> Salvar </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    ) 
}

export default MeuCadastroEndereco;