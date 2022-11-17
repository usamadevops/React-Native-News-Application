import React from 'react';
import MainStack from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import { Splash } from '../Screens';

const Route = () => {
  const [loading, setloading] = React.useState(false);
  
    React.useEffect(() => {
  setloading(true)
  setTimeout(() => {
    setloading(false)

  }, 2000);
    }, []);

  if (loading) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
         <MainStack />
      </NavigationContainer>
    );
}
};



export default Route;
