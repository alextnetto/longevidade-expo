import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function Landing() {
    const { navigate } = useNavigation()

    function handleNavigateToCadastroPage() {
        navigate('Cadastro')
    }
    function handleNavigateToCompletarCadastroPage() {
        navigate('CompletarCadastro')
    }
    function handleNavigateToLoginPage() {
        navigate('Login')
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}> Longevidade +você </Text>
        </View>
        <View style={styles.body}>
            <View style={styles.buttonContainer}>
                <RectButton onPress={handleNavigateToLoginPage} style={styles.button}>
                    <Text style={styles.buttonText}> Login </Text>
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