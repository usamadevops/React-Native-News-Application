import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Source/redux/store';
import Route from './Source/navigation/Route';

const App = () => {

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
