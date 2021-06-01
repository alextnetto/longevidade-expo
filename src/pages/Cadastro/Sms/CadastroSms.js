import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import Backend from '../../../services/back'

function CadastroSms(props) {
    const [ state, setState ] = useState({
        ...props.route.params,
        codigoSms: ''
    })
    const [ aviso, setAviso ] = useState('')
    const [ spinner, setSpinner ] = useState(false)

    const { navigate } = useNavigation()
    async function handleNext() {
        setSpinner(true)
        const api = new Backend()
        const validado = await api.validaSms(state)
        setSpinner(false)
        if (validado) {
            navigate('CadastroRealizado', state)
        } else {
            setAviso('O código informado não está correto. Verifique o código enviado por SMS e tente novamente.')
        }
    }
    function handleGoBack() {
        navigate('Termos', props.route.params)
    }

    function handleError() {
        if (!validSms()) {
            setAviso('Informe o código de 04 digitos enviado por SMS.')
        }
    }

    function validSms() {
        return state.codigoSms.length === 4
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
                    {aviso}
                </Text>
                <NavigationButton
                    isValid={validSms()}
                    handleBack={handleGoBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Próximo'
                />
            </View>
        </View>
    ) 
}

export default CadastroSms;