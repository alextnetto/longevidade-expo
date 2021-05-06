import React from 'react';
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function ButtonCadastro(props) {
    return(
        <View style={styles.container}>
            <RectButton onPress={props.handlerBack} style={{...styles.buttonBack}}>
            <Text style={styles.text}> Voltar </Text>
            </RectButton>
            <RectButton onPress={props.handlerNext} style={{...styles.buttonNext, ...props.style}}>
                <Text style={styles.text}> {props.text} </Text>
            </RectButton>
        </View>
    )
}

export default ButtonCadastro;