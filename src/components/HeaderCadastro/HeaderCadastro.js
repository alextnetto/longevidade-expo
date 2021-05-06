import React from 'react';
import { View, Text } from 'react-native'

import styles from './styles'

function HeaderCadastro() {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}> Longevidade +você </Text>
        </View>
    )
}

export default HeaderCadastro;