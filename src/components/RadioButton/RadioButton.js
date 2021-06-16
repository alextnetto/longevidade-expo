import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import unselectedImg from '../../assets/images/unselected.png'
import selectedImg from '../../assets/images/selected.png'

function RadioButton(props) {
    return(
        <View>
            {props.checked == true ?
                <TouchableOpacity style={styles.button} onPress={props.onPress} disabled={props.disabled || false}>
                    <View style={styles.container}>
                        <Image style={styles.img} source={selectedImg}/>
                        <Text style={styles.text}> {props.text} </Text>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.button} onPress={props.onPress} disabled={props.disabled || false}>
                    <View style={styles.container}>
                        <Image style={styles.img} source={unselectedImg}/>
                        <Text style={styles.text}> {props.text} </Text>
                    </View>
                </TouchableOpacity>}
        </View>
    )
}

export default RadioButton;