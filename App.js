import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import MainStack from './Source/navigation/AuthStack';
import stores from './Source/redux/store';
import {StatusBar, View} from 'react-native';
const App = () => {
  return (
    <Provider store={stores}>
      <View style={{flex: 1}}>
        <StatusBar hidden={false} />
        <MainStack />
      </View>
    </Provider>
  );
};

export default App;
