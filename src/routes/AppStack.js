import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import CadastroStack from './CadastroStack'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Cadastro" component={CadastroStack}/>
                <Screen name="Login" component={Login}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;