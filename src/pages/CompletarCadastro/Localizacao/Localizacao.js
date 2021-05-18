import React, { useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function Localizacao(props) {
    const { navigate } = useNavigation()
    
    function handleNavigateToLoginPage() {
        navigate('Login')
    }

    const [ state, setState ] = useState({
        ...props.route.params,
    })

    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
                <Text style={styles.title}> Localizacao </Text>
            </View>
        </View>
    ) 
}

export default Localizacao;