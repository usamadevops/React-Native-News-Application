import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {Splash} from '../Screens';
import {ReadDataSingleString} from '../Utils/AsyncStorage';
import {Authorization} from '../redux/Modules/auth/selector.auth';
import {NavigationContainer} from '@react-navigation/native';
const Route = () => {
  const Authenticated = useSelector(Authorization, shallowEqual);
  const [isReady, setisReady] = React.useState(false);

  let AsyncToken;
  React.useEffect(() => {
    const loadApp = (async () => {
      AsyncToken = await ReadDataSingleString('@Token');
      console.log(AsyncToken);
      setisReady(true);
    })();
    return () => {
      loadApp;
    };
  }, [AsyncToken, Authenticated]);

  if (!isReady) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        {AsyncToken === null ? <AuthStack /> : <MainStack />}
      </NavigationContainer>
    );
  }
};

export default Route;
