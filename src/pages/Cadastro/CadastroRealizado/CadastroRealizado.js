import React from 'react';
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function CadastroRealizado() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}> Longevidade +você </Text>
            </View>
            <Text style={styles.title}> Cadastro realizado com sucesso </Text>
            <View style={styles.body}>
                <Text style={styles.text}>
                    Que legal ter você por aqui{'\n\n'}
                    Complete as informações adicionais do seu cadastro{'\n\n'}
                    Mas não se preocupe você não precisa fazer isso agora
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}> Completar agora </Text>
                    </RectButton>
                    <RectButton onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}> Deixar para depois </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    ) 
}

export default CadastroRealizado;