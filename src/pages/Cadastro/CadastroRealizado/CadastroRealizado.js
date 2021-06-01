import React from 'react';
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function CadastroRealizado() {
    const { navigate } = useNavigation()

    function handleNavigateToCompletarCadastro() {
        navigate('CompletarCadastro')
    }
    function handleNavigateToLanding() {
        navigate('Landing')
    }
    
    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
            <Text style={styles.title}> Cadastro realizado com sucesso </Text>
                <Text style={styles.text}>
                    Que legal ter você por aqui{'\n\n'}
                    Complete as informações adicionais do seu cadastro{'\n\n'}
                    Mas não se preocupe você não precisa fazer isso agora
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton onPress={handleNavigateToCompletarCadastro} style={styles.button}>
                        <Text style={styles.buttonText}> Completar agora </Text>
                    </RectButton>
                    <RectButton onPress={handleNavigateToLanding} style={styles.button}>
                        <Text style={styles.buttonText}> Deixar para depois </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    ) 
}

export default CadastroRealizado;