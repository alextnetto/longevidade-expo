import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import ButtonCadastro from '../../../components/ButtonCadastro/ButtonCadastro'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import Backend from '../../../services/back'

function CadastroSms(props) {
    const { navigate } = useNavigation()
    
    async function handleNavigateToFinishPage() {
        const api = new Backend()
        const validado = await api.validaSms(state)
        console.log(validado)
        if (validado) {
            navigate('CadastroRealizado', state)
        } else if (state.codigoSms.length < 4) {
            setTexts({avisoSms: 'Informe o código de 04 digitos enviado por SMS.'})
        } else {
            setTexts({avisoSms: 'O código informado não está correto. Verifique o código enviado por SMS e tente novamente.'})
        }

    }
    function handleGoBack() {
        navigate('Termos', props.route.params)
    }

    const [ state, setState ] = useState({
        ...props.route.params,
        codigoSms: ''
    })

    const [ texts, setTexts ] = useState({
        avisoSms: ''
    })

    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
                <Text style={styles.title}> SMS </Text>
                <TextInput 
                keyboardType='numeric'
                placeholder='____'
                maxLength={4}
                value={state.codigoSms}
                onChangeText={(value) => {setState({...state, codigoSms: value})}}
                style={styles.input}
                />
                <Text style={styles.warningText}>
                    {texts.avisoSms}
                </Text>
                <ButtonCadastro 
                    handlerNext={handleNavigateToFinishPage}
                    handlerBack={handleGoBack}
                    text='Próximo'
                />
            </View>
        </View>
    ) 
}

export default CadastroSms;