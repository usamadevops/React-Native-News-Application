import React from 'react'
import { View, Text } from 'react-native'
import { shallowEqual, useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { Splash } from '../Screens';
import { Authorization,isLoadingSelector } from '../redux/modules/auth/selector.auth';
import { NavigationContainer } from '@react-navigation/native';
const Route = () => {
    const Authenticated = useSelector(Authorization, shallowEqual);
   
        return (
            <NavigationContainer>
                {
                    !Authenticated.User ?
                        (
                            <AuthStack />
                        ) : (
                            <MainStack />
                        )
                }    
            </NavigationContainer>
        )
 
}

export default Route
