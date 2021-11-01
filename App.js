import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import MainStack from './Source/navigation/AuthStack';
import store from './Source/redux/store';
import {StatusBar, View} from 'react-native';
import Amplify from 'aws-amplify';
import awsmobile from './src/aws-exports';
Amplify.configure(awsmobile);
const App = () => {
  console.log(Amplify.configure(awsmobile));
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar hidden={false} />
        <MainStack />
      </View>
    </Provider>
  );
};

export default App;
