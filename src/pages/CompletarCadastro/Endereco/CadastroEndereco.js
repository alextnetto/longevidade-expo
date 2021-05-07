import React, { useState} from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import ButtonCadastro from '../../../components/ButtonCadastro/ButtonCadastro'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
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
        referencia: ''
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
            <HeaderCadastro />
            <View style={styles.body}>
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
                    <View style={styles.linha1}>
                        <TextInput
                            style={styles.inputUf} 
                            placeholder='UF'
                            value={state.estado}
                            onChangeText={(value) => setState({...state, estado: value})}
                        />
                        <TextInput
                            style={styles.inputCidade} 
                            placeholder='Cidade'
                            value={state.cidade}
                            onChangeText={(value) => setState({...state, cidade: value})}
                        />
                    </View>
                    <TextInput
                        style={styles.input} 
                        placeholder='Bairro'
                        value={state.bairro}
                        onChangeText={(value) => setState({...state, bairro: value})}
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
                        placeholder='Ponto de referência'
                        value={state.referencia}
                        onChangeText={(value) => setState({...state, referencia: value})}
                    />
                    </View>
                <ButtonCadastro handler={handleNavigateToLoginPage} text='Próximo'/>
            </View>
        </View>
    ) 
}

export default CadastroEndereco;