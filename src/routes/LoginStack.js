import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login/Login/Login'
import Logado from '../pages/Login/Logado/Logado'
import EsqueciSenha from '../pages/Login/EsqueciSenha/EsqueciSenha'
import RedefinirSenhaSms from '../pages/Login/RedefinirSenhaSms/RedefinirSenhaSms'
import RedefinirSenha from '../pages/Login/RedefinirSenha/RedefinirSenha'
import Redefinido from '../pages/Login/Redefinido/Redefinido'

const { Navigator, Screen } = createStackNavigator()

function LoginStack() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="Logado" component={Logado}/>
            <Screen name="EsqueciSenha" component={EsqueciSenha}/>
            <Screen name="RedefinirSenhaSms" component={RedefinirSenhaSms}/>
            <Screen name="RedefinirSenha" component={RedefinirSenha}/>
            <Screen name="Redefinido" component={Redefinido}/>
        </Navigator>
    )
}

export default LoginStack;