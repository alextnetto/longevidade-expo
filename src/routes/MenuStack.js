import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import MeuCadastro from '../pages/Menu/MeuCadastro/MeuCadastro'
import AcessoESeguranca from '../pages/Menu/MeuCadastro/AcessoESeguranca/AcessoESeguranca'
import DadosPessoais from '../pages/Menu/MeuCadastro/DadosPessoais/DadosPessoais'
import MeuCadastroEndereco from '../pages/Menu/MeuCadastro/Endereco/MeuCadastroEndereco'

const { Navigator, Screen } = createStackNavigator()

function MenuStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="MeuCadastro" component={MeuCadastro}/>
            <Screen name="DadosPessoais" component={DadosPessoais}/>
            <Screen name="MeuCadastroEndereco" component={MeuCadastroEndereco}/>
            <Screen name="AcessoESeguranca" component={AcessoESeguranca}/>
        </Navigator>
    )
}

export default MenuStack;