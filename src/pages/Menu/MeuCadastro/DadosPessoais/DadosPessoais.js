import React, { useState } from 'react';
import { View, Text, Switch, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { mask as masker } from 'remask'
import Spinner from 'react-native-loading-spinner-overlay';

import HeaderCadastro from '../../../../components/HeaderCadastro/HeaderCadastro'
import styles from './styles'
import Backend from '../../../../services/back'
import RadioButton from '../../../../components/RadioButton/RadioButton'


function DadosPessoais(props) {
    const data = props.route.params
    const nascimento = String(data.dataNascimento)
    const [ state, setState ] = useState({
        nome: `${data.nome} ${data.sobreNome}`,
        genero: data.genero,
        nascimento: `${nascimento.substring(8)}/${nascimento.substring(5,7)}/${nascimento.substring(0,4)}`,
        email: data.email
    })
    const [ aviso, setAviso ] = useState('')
    const [ editar, setEditar ] = useState(false)
    const [ spinner, setSpinner ] = useState(false)

    const { navigate, goBack } = useNavigation()
    function handleError() {
        if (!validNome()) {
            setAviso('Informe o seu nome completo.')
        } else if (state.nascimento.length === 0) {
            setAviso('Informe a sua data de nascimento.')
        } else if (!validNascimento()) {
            setAviso('A data de nascimento informada não está correta. Verifique e tente novamente.')
        } else {
            handleSave()
        }
    }
    function handleNascimento(value) {
        const mask = '99/99/9999'
        setState({
            ...state,
            nascimento: masker(value, mask)
        })
    }
    function handleSave() {
        const api = new Backend()
        api.editarDadosCadastraisPessoaFisica(state)
        return
    }

    function validNome() {
        const nome = String(state.nome)
        const re = /[a-zA-Z]\s[a-zA-Z]/;
        return re.test(nome);
    }
    function validNascimento() {
        const re = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        return re.test(state.nascimento);
    }

    function valid() {
        return true
    }
    
    return(
        <View style={styles.container}>
            <Spinner
                visible={spinner}
                textContent={'Carregando...'}
                textStyle={styles.spinnerTextStyle}
            />
            <HeaderCadastro />
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Dados Pessoais </Text>
                </View>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.inputTitle}> Nome completo </Text>
                        <TextInput 
                            style={styles.input}
                            value={state.nome}
                            onChangeText={(text) => setState({...state, nome: text})}
                            editable={editar}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}> Data de nascimento </Text>
                        <TextInput 
                            placeholder='__ /__ /____'
                            keyboardType='numeric'
                            value={state.nascimento}
                            onChangeText={handleNascimento}
                            style={styles.input}
                            maxLength={10}
                            editable={editar}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}> Gênero </Text>
                        <View style={styles.buttonContainer}>
                            <RadioButton
                                text='Masculino'
                                checked={state.genero === 'M'}
                                onPress={() => {setState({...state, genero: 'M'})}}
                                disabled={!editar}
                                />
                            <RadioButton
                                text='Feminino'
                                checked={state.genero === 'F'}
                                onPress={() => {setState({...state, genero: 'F'})}}
                                disabled={!editar}
                                />
                            <RadioButton
                                text='Outros'
                                checked={state.genero === 'Outros'}
                                onPress={() => {setState({...state, genero: 'Outros'})}}
                                disabled={!editar}
                                />
                            <RadioButton
                                text='Não quero informar'
                                checked={state.genero === 'Não quero informar'}
                                onPress={() => {setState({...state, genero: 'Não quero informar'})}}
                                disabled={!editar}
                                />
                        </View>
                    </View>
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#00a000" }}
                        thumbColor={editar ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setEditar(!editar)}}
                        value={editar}
                    />
                    <Text style={styles.switchText}> Editar </Text>
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <View style={styles.buttonContainer2}>
                    <RectButton style={styles.button} onPress={goBack}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleError}>
                        <Text style={styles.buttonText}> Salvar </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    ) 
}

export default DadosPessoais;