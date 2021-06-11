import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'

import styles from './styles'
import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import HeaderCadastro from '../../../components/HeaderCadastro/HeaderCadastro'

function InfoPessoais1(props) {
    const { navigate } = useNavigation()
    function handleNext() {
        navigate('InfoPessoais2', state)
    }
    function handleGoBack() {
        navigate('Landing')
    }
    
    const [ state, setState ] = useState({
        ...props.route.params,
        nome: '',
        cpf: '',
        email: '',
        cpfMask: ''
    })

    const [ aviso, setAviso ] = useState('')

    
    function validaEmail() {
        const email = String(state.email)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    function validaCpf() {
        const cpf = String(state.cpf)
        var Soma;
        var Resto;
        Soma = 0;
        if (cpf.length === 0) return true
        if (cpf == "00000000000") return false;
        
        for (var i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
        
        Soma = 0;
        for (var i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    }
    function validaNome() {
        const nome = String(state.nome)
        const re = /[a-zA-Z]\s[a-zA-Z]/;
        return re.test(nome);
    }

    function handleCpfChange(value) {
        const mask = '999.999.999-99'
        setState({
            ...state,
            cpf: unMask(value),
            cpfMask: masker(value, mask)
        })
    }

    function handleError() {
        if (!validaNome()) {
            setAviso('Informe o seu nome completo.')
        //} else if (state.cpf.length === 0) {
        //    setAviso('Informe o seu CPF.')
        //} else if (!validaCpf()) {
        //    setAviso('O CPF informado não está correto. Verifique e tente novamente.')
        } else if (state.email.length === 0) {
            setAviso('Informe o seu melhor e-mail.')
        } else if (!validaEmail()) {
            setAviso('O email não foi digitado corretamente. Verifique e tente novamente.')
        }
    }

    return(
        <View style={styles.container}>
            <HeaderCadastro />
            <View style={styles.body}>
                <Text style={styles.title}> Preencha as informações </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}> Nome completo </Text>
                    <TextInput 
                        style={styles.input}
                        value={state.nome}
                        onChangeText={(text) => setState({...state, nome: text})}
                    />
                    {/* 
                    <Text style={styles.inputTitle}> Número de CPF (opcional)</Text>
                    <TextInput 
                        placeholder='___.___.___-__'
                        keyboardType='numeric'
                        value={state.cpfMask}
                        onChangeText={handleCpfChange}
                        style={styles.input}
                        onChangeText={handleCpfChange}
                        maxLength={14}
                    />
                    */}
                    <Text style={styles.inputTitle}> Endereço de email </Text>
                    <TextInput 
                        style={styles.input}
                        value={state.email}
                        onChangeText={(text) => setState({...state, email: text})}
                    />
                </View>
                <Text style={styles.warningText}> {aviso} </Text>
                <NavigationButton
                    isValid={validaEmail() && validaCpf() && validaNome()}
                    handleBack={handleGoBack}
                    textBack='Voltar'
                    handleError={handleError}
                    handleNext={handleNext}
                    textNext='Próximo'
                />
            </View>
        </View>
    ) 
}

export default InfoPessoais1;