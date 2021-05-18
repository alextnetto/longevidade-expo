import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import CadastroEndereco from '../pages/CompletarCadastro/Endereco/CadastroEndereco'
import InfoPessoais1 from '../pages/CompletarCadastro/InfoPessoais1/InfoPessoais1'
import InfoPessoais2 from '../pages/CompletarCadastro/InfoPessoais2/InfoPessoais2'
import Localizacao from '../pages/CompletarCadastro/Localizacao/Localizacao'
import CadastroFinalizado from '../pages/CompletarCadastro/CadastroFinalizado/CadastroFinalizado'

const { Navigator, Screen } = createStackNavigator()

function CompletarCadastroStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="InfoPessoais1" component={InfoPessoais1}/>
            <Screen name="InfoPessoais2" component={InfoPessoais2}/>
            <Screen name="Localizacao" component={Localizacao}/>
            <Screen name="Endereco" component={CadastroEndereco}/>
            <Screen name="Finalizado" component={CadastroFinalizado}/>
        </Navigator>
    )
}

export default CompletarCadastroStack;
