import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker, unMask } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../services/back'
import NavigationButton from '../../../components/NavigationButton/NavigationButton';

function MeuCadastro() {
    const [ state, setState ] = useState({})
    const [ spinner, setSpinner ] = useState(false)
    
    const { navigate, goBack } = useNavigation()
    function handleNext() {
        navigate('Landing')
    }
    function handleGoBack() {
        goBack()
    }
    async function handleNavigateToDadosPessoais() {
        const api = new Backend()
        setSpinner(true)
        const dadosPessoaFisica = await api.dadosPessoaFisica()
        setSpinner(false)
        if (dadosPessoaFisica) {
            navigate('DadosPessoais', dadosPessoaFisica)
        }
    }
    async function handleNavigateToMeuCadastroEndereco() {
        const api = new Backend()
        setSpinner(true)
        const dadosPessoaFisica = await api.dadosPessoaFisica()
        setSpinner(false)
        if (dadosPessoaFisica) {
            navigate('MeuCadastroEndereco', dadosPessoaFisica)
        }
    }
    function handleNavigateToAcessoESeguranca() {
        navigate('AcessoESeguranca')
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
                    <Text style={styles.title}> Meu Cadastro </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <RectButton onPress={handleNavigateToDadosPessoais} style={styles.button}>
                        <Text style={styles.buttonText}> Dados cadastrais </Text>
                    </RectButton>
                    <RectButton onPress={handleNavigateToMeuCadastroEndereco} style={styles.button}>
                        <Text style={styles.buttonText}> Endereços </Text>
                    </RectButton>
                    <RectButton onPress={handleNavigateToAcessoESeguranca} style={styles.button}>
                        <Text style={styles.buttonText}> Acesso e Segurança </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    ) 
}

export default MeuCadastro;