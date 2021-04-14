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

    function handleNavigateToLoginPage() {
        navigate('Login')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}> Longevidade </Text>
        <RectButton onPress={handleNavigateToLoginPage} style={styles.button}>
            <Text> Login </Text>
        </RectButton>
        <RectButton onPress={handleNavigateToCadastroPage} style={styles.button}>
            <Text> Cadastro </Text>
        </RectButton>
    </View>
    )
}

export default Landing;