import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing/Landing'
import CadastroStack from './CadastroStack'
import CompletarCadastroStack from './CompletarCadastroStack'
import LoginStack from './LoginStack'
import MenuStack from './MenuStack'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="CadastroStack" component={CadastroStack}/>
                <Screen name="CompletarCadastroStack" component={CompletarCadastroStack}/>
                <Screen name="LoginStack" component={LoginStack}/>
                <Screen name="MenuStack" component={MenuStack}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;