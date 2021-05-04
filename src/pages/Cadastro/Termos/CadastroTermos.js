import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements'

import styles from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroTermos(props) {
    const { navigate } = useNavigation()
    
    function handleNavigateToCadastroSms() {
        navigate('Sms', state)
    }
    function handleGoBack() {
        navigate('Senha', props.route.params)
    }
    function handleFalseAceite() {
        setTexts({avisoAceite: "Para prosseguir é necessário aceitar os 'Termos de Uso'."})
    }

    const [ state, setState ] = useState({
        ...props.route.params,
        aceite: false
    })

    const [ texts, setTexts ] = useState({
        avisoAceite: ''
    })
    
    var buttonCadastro
    if (state.aceite) {
        buttonCadastro = <ButtonCadastro
                            handlerNext={handleNavigateToCadastroSms}
                            handlerBack={handleGoBack}
                            text='Próximo'/>
    } else {
        buttonCadastro = <ButtonCadastro 
                            handlerNext={handleFalseAceite}
                            handlerBack={handleGoBack}
                            text='Próximo'
                            style={{opacity:0.5}}/>
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}> Termos </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.scrollContainer}>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </ScrollView>
                </View>
                <CheckBox
                    center
                    iconRight
                    title="Aceito os termos e condições"
                    checked={state.aceite}
                    onPress={() => setState({...state, aceite: !state.aceite})}
                    containerStyle={styles.checkBox}
                />
                <Text style={styles.warningText}>
                    {texts.avisoAceite}
                </Text>
                {buttonCadastro}
            </View>

        </View>
    ) 
}

export default CadastroTermos;