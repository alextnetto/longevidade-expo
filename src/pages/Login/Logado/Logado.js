import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function Logado() {
    const { navigate } = useNavigation()

    function handleNext() {
        navigate('Landing')
    }
    
    return (
    <View style={styles.container}>
        <HeaderCadastro />
        <View style={styles.body}>
            <Text style={styles.title}> Logado! </Text>
            <View style={styles.buttonContainer}>
                <RectButton onPress={handleNext} style={styles.button}>
                    <Text style={styles.buttonText}> Home </Text>
                </RectButton>
            </View>
        </View>
    </View>
    )
}

export default Logado;