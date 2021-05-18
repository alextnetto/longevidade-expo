import React from 'react';
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function CadastroFinalizado() {
    const { navigate } = useNavigation()
    function handleNavigateToLanding() {
        navigate('Landing')
    }
    
    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <Text style={styles.title}> Cadastro realizado com sucesso </Text>
            <View style={styles.body}>
                
                <View style={styles.buttonContainer}>
                    <RectButton onPress={handleNavigateToLanding} style={styles.button}>
                        <Text style={styles.buttonText}> Ok </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    ) 
}

export default CadastroFinalizado;