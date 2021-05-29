import React from 'react';
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

function NavigationButton(props) {
    return(
        <View style={styles.container}>
            <RectButton 
                onPress={props.handleBack}
                style={styles.buttonBack}
            >
                <Text style={styles.text}> {props.textBack} </Text>
            </RectButton>
            <RectButton 
                onPress={props.isValid ? props.handleNext : props.handleError}
                style={props.isValid ? styles.buttonNext : {...styles.buttonNext, opacity:0.5}}
            >
                <Text style={styles.text}> {props.textNext} </Text>
            </RectButton>
        </View>
    )
}

export default NavigationButton;