import 'react-native-gesture-handler';

import React from 'react';
import MainStack from './Source/navigation/AuthStack';
import {StatusBar, View} from 'react-native';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <MainStack />
    </View>
  );
};

export default App

