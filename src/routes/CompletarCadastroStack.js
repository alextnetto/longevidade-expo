import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import CadastroEndereco from '../pages/CompletarCadastro/Endereco/CadastroEndereco'
import InfoPessoais1 from '../pages/CompletarCadastro/InfoPessoais1/InfoPessoais1'

const { Navigator, Screen } = createStackNavigator()

function CompletarCadastroStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="InfoPessoais1" component={InfoPessoais1}/>
            <Screen name="Endereco" component={CadastroEndereco}/>
        </Navigator>
    )
}

export default CompletarCadastroStack;
