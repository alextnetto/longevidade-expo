import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing/Landing'
import CadastroStack from './CadastroStack'
import CompletarCadastroStack from './CompletarCadastroStack'
import RedefinirSenhaStack from './RedefinirSenhaStack'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Cadastro" component={CadastroStack}/>
                <Screen name="CompletarCadastro" component={CompletarCadastroStack}/>
                <Screen name="RedefinirSenhaStack" component={RedefinirSenhaStack}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;