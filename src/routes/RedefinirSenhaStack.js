import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login/Login/Login'
import EsqueciSenha from '../pages/Login/EsqueciSenha/EsqueciSenha'

const { Navigator, Screen } = createStackNavigator()

function RedefinirSenhaStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="EsqueciSenha" component={EsqueciSenha}/>
        </Navigator>
    )
}

export default RedefinirSenhaStack;