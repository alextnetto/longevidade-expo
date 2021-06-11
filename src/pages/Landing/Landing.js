import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import HeaderCadastro from '../../components/HeaderCadastro/HeaderCadastro'

function Landing() {
    const { navigate } = useNavigation()

    function handleNavigateToLoginPage() {
        navigate('LoginStack')
    }
    function handleNavigateToMenu() {
        navigate('MenuStack')
    }
    function handleNavigateToCadastroPage() {
        navigate('CadastroStack')
    }
    function handleNavigateToCompletarCadastroPage() {
        navigate('CompletarCadastroStack')
    }

    return (
    <View style={styles.container}>
        <HeaderCadastro />
        <View style={styles.body}>
            <View style={styles.buttonContainer}>
                <RectButton onPress={handleNavigateToLoginPage} style={styles.button}>
                    <Text style={styles.buttonText}> Login </Text>
                </RectButton>
                <RectButton onPress={handleNavigateToMenu} style={styles.button}>
                    <Text style={styles.buttonText}> Menu </Text>
                </RectButton>
                <RectButton onPress={handleNavigateToCadastroPage} style={styles.button}>
                    <Text style={styles.buttonText}> Cadastro </Text>
                </RectButton>
                <RectButton onPress={handleNavigateToCompletarCadastroPage} style={styles.button}>
                    <Text style={styles.buttonText}> Completar cadastro </Text>
                </RectButton>
            </View>
        </View>
    </View>
    )
}

export default Landing;