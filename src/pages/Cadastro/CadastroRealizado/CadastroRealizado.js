import React from 'react';
import { View, Text } from 'react-native'

import styles from './styles'

function CadastroRealizado() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Cadastro realizado com sucesso </Text>
        </View>
    ) 
}

export default CadastroRealizado;