import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mask as masker, unMask } from 'remask'
import RNPickerSelect from "react-native-picker-select";

import { styles, pickerSelectStyles } from './styles'
import ButtonCadastro from '../components/ButtonCadastro/ButtonCadastro'

function CadastroCelular() {
    const { navigate } = useNavigation()
    function handleNavigateToCadastroSenha() {
        navigate('Senha', state)
    }

    const [ state, setState ] = useState({
        celularMask: '',
        celularValue: '',
        tipoPessoa: 'PF'
    })
    function handleCelularChange(value) {
        const mask = '(99) 9 9999-9999'
        setState({
            celularValue: unMask(value),
            celularMask: masker(value, mask)
        })
    }

    var buttonCadastro
    if (state.celularValue.length === 11) {
        buttonCadastro = <ButtonCadastro 
            handler={handleNavigateToCadastroSenha} text='Próximo'/>
    } else {
         buttonCadastro = <ButtonCadastro text='Próximo' style={{opacity:0.5}}/>
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Celular </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='(__) _ ____-____'
                value={state.celularMask}
                onChangeText={handleCelularChange}
                maxLength={16}
            />
            <View style={styles.selectContainer}>
                <Text style={styles.selectTitle}> Você é </Text>
                <RNPickerSelect
                    onValueChange={(value) => setState({...state, tipoPessoa: value})}
                    value={state.tipoPessoa}
                    items={[
                        { label: "pessoa física", value: "PF" },
                        { label: "pessoa jurídica", value: "PJ" }
                    ]}
                    style={pickerSelectStyles}
                />
            </View>
            {buttonCadastro}
        </View>
    ) 
}

export default CadastroCelular;