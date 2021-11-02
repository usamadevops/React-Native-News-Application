import React from 'react';
import {View, Text} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {Splash} from '../Screens';
import {
  Authorization,
} from '../redux/Modules/auth/selector.auth';
import {NavigationContainer} from '@react-navigation/native';
const Route = () => {
  const Authenticated = useSelector(Authorization, shallowEqual);
  const [isReady, setisReady] = React.useState(false);

  React.useEffect(() => {
    
    
  }, []);

  if (!isReady) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        {!Authenticated.User ? <AuthStack /> : <MainStack />}
      </NavigationContainer>
    );
  }
};

export default Route;
