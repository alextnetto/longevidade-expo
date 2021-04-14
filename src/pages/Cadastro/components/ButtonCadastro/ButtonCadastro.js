import React from 'react';
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function ButtonCadastro(props) {
    return(
        <RectButton onPress={props.handler} style={{...styles.button, ...props.style}}>
            <Text style={styles.text}> {props.text} </Text>
        </RectButton>
    ) 
}

export default ButtonCadastro;