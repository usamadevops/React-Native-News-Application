import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {Splash} from '../Screens';
import {clearAll, ReadDataSingleString} from '../Utils/AsyncStorage';

import {NavigationContainer} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
const Route = () => {
  const [isReady, setisReady] = React.useState(false);

  let AsyncToken=null;
  let validity;
  React.useEffect(() => {
    const loadApp = (async () => {
      let session = Auth.currentSession();
      validity  = (await session).isValid();
     if(validity){
      AsyncToken = await ReadDataSingleString('@Token');
     }
     else {
       clearAll();
     }
      console.log('token', AsyncToken,validity);
      setisReady(true);
    })();
    return () => {
      loadApp;
    };
  }, [AsyncToken]);

  if (!isReady) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        {AsyncToken === '' &&  !validity  ? <AuthStack /> : <MainStack />}
      </NavigationContainer>
    );
  }
};

export default Route;
