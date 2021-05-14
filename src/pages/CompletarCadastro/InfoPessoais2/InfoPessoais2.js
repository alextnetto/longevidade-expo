import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import ButtonCadastro from '../../../components/ButtonCadastro/ButtonCadastro'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import RadioButton from '../../../components/RadioButton/RadioButton'

function InfoPessoais2(props) {
    const [ state, setState ] = useState({
        ...props.route.params,
        nascimento: new Date(),
        nascimento1: '',
        nascimento1Mask: '',
        genero: ''
    })

    const [ aviso, setAviso ] = useState('')
    
    const { navigate } = useNavigation()
    function handleNavigateToCadastroTermos() {
        navigate('Termos', state)
    }
    function handleGoBack() {
        navigate('Landing')
    }
    
    function validaNascimento() {
        const nascimento = String(state.nascimento1Mask)
        const re = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        return re.test(nascimento);
    }
    function validaGenero() {
        return state.genero !== ''
    }

    function onDateChange(event, selectedDate) {
        setState({...state, nascimento: selectedDate})
    }
    function handleNascimento(value) {
        const mask = '99/99/9999'
        setState({
            ...state,
            nascimento1: unMask(value),
            nascimento1Mask: masker(value, mask)
        })
    }
    function handleIncomplete() {
        if (state.genero == '') {
            setAviso('Selecione o seu gênero.')
        } else if (state.nascimento1.length === 0) {
            setAviso('Informe a sua data de nascimento.')
        } else {
            setAviso('Sua senha deve conter 06 números.')
        }
    }

    var buttonCadastro
    if (validaGenero() && validaNascimento()) {
        buttonCadastro = <ButtonCadastro
                            handlerNext={handleNavigateToCadastroTermos}
                            handlerBack={handleGoBack}
                            text='Próximo'/>
    } else {
        buttonCadastro = <ButtonCadastro 
                            handlerNext={handleIncomplete}
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
                    <TextInput 
                        placeholder='__ /__ /____'
                        keyboardType='numeric'
                        value={state.nascimento1Mask}
                        onChangeText={handleNascimento}
                        style={styles.input}
                        onChangeText={handleNascimento}
                        maxLength={10}
                    />
                    <Text style={styles.inputTitle}> Gênero </Text>
                    <View style={styles.buttonContainer}>
                        <RadioButton
                            text='Masculino'
                            checked={state.genero === 'M'}
                            onPress={() => {setState({...state, genero: 'M'})}}
                        />
                        <RadioButton
                            text='Feminino'
                            checked={state.genero === 'F'}
                            onPress={() => {setState({...state, genero: 'F'})}}
                        />
                        <RadioButton
                            text='Outros'
                            checked={state.genero === 'Outros'}
                            onPress={() => {setState({...state, genero: 'Outros'})}}
                        />
                        <RadioButton
                            text='Não quero informar'
                            checked={state.genero === 'Não quero informar'}
                            onPress={() => {setState({...state, genero: 'Não quero informar'})}}
                        />
                    </View>
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                {buttonCadastro}
            </View>
        </View>
    ) 
}

export default InfoPessoais2;