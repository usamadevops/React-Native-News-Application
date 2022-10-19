import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import { Splash } from '../Screens';
import { useSelector,connect, shallowEqual} from 'react-redux';
import {GetData} from '../redux/Modules/auth/action.auth';
import {Authorization,isLoadingSelector} from '../redux/Modules/auth/selector.auth'

const Route = ({GetDataFunc}) => {
  // const Auth=useSelector(Authorization,shallowEqual)
  // const loading =useSelector(isLoadingSelector,shallowEqual);
  
  //   React.useEffect(() => {
  //  GetDataFunc();
  //   }, [Auth]);

  // if (loading) {
  //   return <Splash />;
  // } else {
    return (
      <NavigationContainer>
         <MainStack />
      </NavigationContainer>
    );
// }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching Login action to update State
//     GetDataFunc: event => dispatch(GetData(event)),
//   };
// };

export default Route;
