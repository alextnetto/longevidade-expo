import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'
import RadioButton from '../../../components/RadioButton/RadioButton'

function InfoPessoais2(props) {
    const [ state, setState ] = useState({
        ...props.route.params,
        //nascimento: new Date(),
        nascimento: '',
        nascimentoMask: '',
        genero: ''
    })
    const [ aviso, setAviso ] = useState('')
    
    const { navigate, goBack } = useNavigation()
    function handleNext() {
        navigate('Endereco', state)
    }
    
    function validNascimento() {
        const nascimento = String(state.nascimentoMask)
        const re = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        return re.test(nascimento);
    }
    function validGenero() {
        return state.genero !== ''
    }

    function onDateChange(event, selectedDate) {
        setState({...state, nascimento: selectedDate})
    }
    function handleNascimento(value) {
        const mask = '99/99/9999'
        setState({
            ...state,
            nascimento: unMask(value),
            nascimentoMask: masker(value, mask)
        })
    }
    function handleError() {
        if (state.nascimento.length === 0) {
            setAviso('Informe a sua data de nascimento.')
        } else if (!validNascimento()) {
            setAviso('A data de nascimento informada não está correta. Verifique e tente novamente.')
        }
        else{
            setAviso('Selecione o seu gênero.')
        }
    }

    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
                <Text style={styles.title}> Preencha as informações </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}> Data de nascimento </Text>
                    {/* 
                    <RNDateTimePicker
                        style={styles.inputNascimento}
                        value={state.nascimento}
                        onChange={onDateChange}
                        locale="pt-BR"
                    />
                    */}
                    <TextInput 
                        placeholder='__ /__ /____'
                        keyboardType='numeric'
                        value={state.nascimentoMask}
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
                <NavigationButton
                    isValid={validGenero() && validNascimento()}
                    handleBack={goBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Próximo'
                />
            </View>
        </View>
    ) 
}

export default InfoPessoais2;