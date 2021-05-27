import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login/Login'
import EsqueciSenha from '../pages/Login/EsqueciSenha/EsqueciSenha'
import CadastroStack from './CadastroStack'
import CompletarCadastroStack from './CompletarCadastroStack'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Cadastro" component={CadastroStack}/>
                <Screen name="CompletarCadastro" component={CompletarCadastroStack}/>
                <Screen name="Login" component={Login}/>
                <Screen name="EsqueciSenha" component={EsqueciSenha}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;