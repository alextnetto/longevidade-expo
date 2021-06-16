import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../../services/back'
import NavigationButton from '../../../../components/NavigationButton/NavigationButton';

function AcessoESeguranca() {
    const [ state, setState ] = useState({})
    const [ aviso, setAviso ] = useState('Error')
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
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder='Input'
                        value={''}
                        onChangeText={() => {}}
                        maxLength={16}
                    />
                    <RectButton onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}> Text </Text>
                    </RectButton>
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <NavigationButton
                    isValid={valid()}
                    handleBack={goBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Próximo'
                />
            </View>
        </View>
    ) 
}

export default AcessoESeguranca;