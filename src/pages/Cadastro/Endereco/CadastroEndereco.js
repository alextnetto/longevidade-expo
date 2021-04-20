import React, { useState} from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'
import getCepData from '../../../services/cep'

function CadastroEndereco(props) {
    const { navigate } = useNavigation()
    
    function handleNavigateToLoginPage() {
        navigate('Login')
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
    })

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

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Endereco </Text>
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
                    keyboardType='numeric'
                    placeholder='Estado'
                    value={state.estado}
                    onChangeText={(value) => setState({...state, estado: value})}
                />
                <TextInput
                    style={styles.input} 
                    keyboardType='numeric'
                    placeholder='Cidade'
                    value={state.cidade}
                    onChangeText={(value) => setState({...state, cidade: value})}
                />
                <TextInput
                    style={styles.input} 
                    keyboardType='numeric'
                    placeholder='Bairro'
                    value={state.bairro}
                    onChangeText={(value) => setState({...state, bairro: value})}
                />
                <TextInput
                    style={styles.input} 
                    keyboardType='numeric'
                    placeholder='Endereço'
                    value={state.endereco}
                    onChangeText={(value) => setState({...state, endereco: value})}
                />
                <TextInput
                    style={styles.input} 
                    keyboardType='numeric'
                    placeholder='Número'
                    value={state.numero}
                    onChangeText={(value) => setState({...state, numero: value})}
                />
                <TextInput
                    style={styles.input} 
                    keyboardType='numeric'
                    placeholder='Complemento'
                    value={state.complemento}
                    onChangeText={(value) => setState({...state, complemento: value})}
                />
            </View>
            <ButtonCadastro handler={handleNavigateToLoginPage} text='Próximo'/>
        </View>
    ) 
}

export default CadastroEndereco;