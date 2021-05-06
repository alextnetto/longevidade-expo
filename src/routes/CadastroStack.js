import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import CadastroCelular from '../pages/Cadastro/Celular/CadastroCelular'
import CadastroSenha from '../pages/Cadastro/Senha/CadastroSenha'
import CadastroTermos from '../pages/Cadastro/Termos/CadastroTermos'
import CadastroSms from '../pages/Cadastro/Sms/CadastroSms'
import CadastroRealizado from '../pages/Cadastro/CadastroRealizado/CadastroRealizado'
import CompletarCadastroStack from './CompletarCadastroStack'

const { Navigator, Screen } = createStackNavigator()

function CadastroStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Celular" component={CadastroCelular}/>
            <Screen name="Senha" component={CadastroSenha}/>
            <Screen name="Termos" component={CadastroTermos}/>
            <Screen name="Sms" component={CadastroSms}/>
            <Screen name="CadastroRealizado" component={CadastroRealizado}/>
            <Screen name="CompletarCadastro" component={CompletarCadastroStack}/>
        </Navigator>
    )
}

export default CadastroStack;