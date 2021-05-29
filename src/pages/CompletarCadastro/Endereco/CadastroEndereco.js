import React, { useState} from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import getCepData from '../../../services/cep'
import Backend from '../../../services/back'

function CadastroEndereco(props) {
    const { navigate } = useNavigation()
    async function handleGoNext() {
        setSpinner(true)
        const api = new Backend()
        const cadastro = await api.completarCadastro(state)
        setSpinner(false)
        if (cadastro) {
            navigate('Finalizado')
        } else {
            setAviso('Algo deu errado na requisição')
        }
    }
    function handleGoBack() {
        navigate('InfoPessoais2')
    }

    const [ state, setState ] = useState({
        ...props.route.params,
        cepValue: '',
        cepMask: '',
        estado: '',
        cidade: '',
        bairro: '',
        endereco: '',
        numero: '',
        complemento: '',
        referencia: ''
    })
    const [ aviso, setAviso ] = useState('')
    const [ spinner, setSpinner ] = useState(false)

    async function handleCepChange(value) {
        const mask = '99999-999'
        if (value.length === 9) {
            const data = await getCepData(unMask(value))
            setState({
                ...state,
                cepValue: unMask(value),
                cepMask: masker(value, mask),
                bairro: data.bairro,
                cidade: data.localidade,
                endereco: data.logradouro,
                estado: data.uf,
            })
        } else {
            setState({
                ...state,
                cepValue: unMask(value),
                cepMask: masker(value, mask)
            })
        }
    }
    function valida() {
        return state.cepValue.length !== 0 &&
            state.endereco.length !== 0 &&
            state.numero.length !== 0 &&
            state.bairro.length !== 0 &&
            state.cidade.length !== 0 &&
            state.estado.length !== 0 
    }
    // TODO: Fazer função para checkar cep errado
    async function validaCep() {
        const cep = String(state.cepValue)
        if (cep.length === 9) {
            const data = await getCepData(cep)
            return data
        }
        return false
    }
    function handleIncomplete() {
        if (state.cepValue.length === 0) {
            setAviso('Informe o CEP do seu endereço.')
        } else if (state.numero.length === 0) {
            setAviso('Informe o número do endereço.')
        } else if (state.endereco.length === 0) {
            setAviso('Informe o seu endereço. Exemplo (Av., Rua, Praça).')
        } else if (state.bairro.length === 0) {
            setAviso('Informe o bairro do seu endereço.')
        } else if (state.cidade.length === 0) {
            setAviso('Informe a cidade do seu endereço.')
        } else if (state.estado.length === 0) {
            setAviso('Informe o estado do seu endereço.')
        }
    }

    var NavigationButton
    if (valida()) {
        NavigationButton = <NavigationButton
        handlerNext={handleGoNext}
        handlerBack={handleGoBack}
        text='Próximo'/>
    } else {
        NavigationButton = <NavigationButton 
        handlerNext={handleIncomplete}
                            handlerBack={handleGoBack}
                            text='Próximo'
                            style={{opacity:0.5}}/>
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
                <Text style={styles.title}> Endereço </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input} 
                        keyboardType='numeric'
                        placeholder='CEP'
                        value={state.cepMask}
                        onChangeText={handleCepChange}
                        maxLength={9}
                    />
                    <TextInput
                        style={styles.input} 
                        placeholder='Endereço'
                        value={state.endereco}
                        onChangeText={(value) => setState({...state, endereco: value})}
                    />
                    <View style={styles.linha2}>
                        <TextInput
                            style={styles.inputNumero} 
                            keyboardType='numeric'
                            placeholder='Número'
                            value={state.numero}
                            onChangeText={(value) => setState({...state, numero: value})}
                        />
                        <TextInput
                            style={styles.inputComplemento} 
                            placeholder='Complemento'
                            value={state.complemento}
                            onChangeText={(value) => setState({...state, complemento: value})}
                        />
                    </View>
                    <TextInput
                        style={styles.input} 
                        placeholder='Bairro'
                        value={state.bairro}
                        onChangeText={(value) => setState({...state, bairro: value})}
                    />
                    <View style={styles.linha1}>
                        <TextInput
                            style={styles.inputCidade} 
                            placeholder='Cidade'
                            value={state.cidade}
                            onChangeText={(value) => setState({...state, cidade: value})}
                        />
                        <TextInput
                            style={styles.inputUf} 
                            placeholder='UF'
                            value={state.estado}
                            onChangeText={(value) => setState({...state, estado: value})}
                        />
                    </View>
                    <TextInput
                        style={styles.input} 
                        placeholder='Ponto de referência'
                        value={state.referencia}
                        onChangeText={(value) => setState({...state, referencia: value})}
                    />
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                {NavigationButton}
            </View>
        </View>
    ) 
}

export default CadastroEndereco;