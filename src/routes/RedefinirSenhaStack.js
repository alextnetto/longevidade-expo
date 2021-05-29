import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login/Login/Login'
import EsqueciSenha from '../pages/Login/EsqueciSenha/EsqueciSenha'
import RedefinirSenhaSms from '../pages/Login/RedefinirSenhaSms/RedefinirSenhaSms'
import RedefinirSenha from '../pages/Login/RedefinirSenha/RedefinirSenha'

const { Navigator, Screen } = createStackNavigator()

function RedefinirSenhaStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="EsqueciSenha" component={EsqueciSenha}/>
            <Screen name="RedefinirSenhaSms" component={RedefinirSenhaSms}/>
            <Screen name="RedefinirSenha" component={RedefinirSenha}/>
        </Navigator>
    )
}

export default RedefinirSenhaStack;