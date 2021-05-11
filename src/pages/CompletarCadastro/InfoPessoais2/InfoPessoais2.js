import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RNDateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles'
import ButtonCadastro from '../../../components/ButtonCadastro/ButtonCadastro'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function InfoPessoais2(props) {
    const [ state, setState ] = useState({
        ...props.route.params,
        nascimento: '',
        genero: ''
    })

    const [ texts, setTexts ] = useState({
        avisoNascimento: '',
        avisoGenero: ''
    })
    const [checked, setChecked] = React.useState('first');
    
    const { navigate } = useNavigation()
    function handleNavigateToCadastroTermos() {
        navigate('Termos', state)
    }
    function handleGoBack() {
        navigate('Landing')
    }
    

    function onDateChange(event, selectedDate) {
        setState({...state, nascimento: selectedDate})
    };
    function handleWrongPassword() {
        if (state.genero == '') {
            setTexts({
                ...texts,
                avisoSenha: 'As senhas informadas não são iguais. Verifique e tente novamente.'
            })
        } else {
            setTexts({
                ...texts,
                avisoSenha: 'Sua senha deve conter 06 números.'
            })
        }
    }
    
    var buttonCadastro
    if (true) {
        buttonCadastro = <ButtonCadastro
                            handlerNext={handleNavigateToCadastroTermos}
                            handlerBack={handleGoBack}
                            text='Próximo'/>
    } else {
        buttonCadastro = <ButtonCadastro 
                            handlerNext={handleWrongPassword}
                            handlerBack={handleGoBack}
                            text='Próximo'
                            style={{opacity:0.5}}/>
    }

    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
                <Text style={styles.title}> Preencha as informações </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}> Data de nascimento </Text>
                    <RNDateTimePicker
                        style={styles.inputNascimento}
                        value={state.nascimento}
                        onChange={onDateChange}
                        locale="pt-BR"
                    />
                    <Text style={styles.inputTitle}> Gênero </Text>
                    <TextInput 
                        keyboardType='numeric'
                        value={state.genero}
                        style={styles.input}
                        onChangeText={(text) => setState({...state, genero: text})}
                    />
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                </View>
                <Text style={styles.warningText}> {texts.avisoSenha} </Text>
                {buttonCadastro}
            </View>
        </View>
    ) 
}

export default InfoPessoais2;