import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Source/redux/store';
import Amplify from 'aws-amplify';
import awsmobile from './src/aws-exports';
import Route from './Source/navigation/Route';
Amplify.configure(awsmobile);
const App = () => {
  console.log(Amplify.configure(awsmobile));
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
