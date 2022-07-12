import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './modules/Reducers';
import rootSagas from './modules/Sagas';

// Nativemodules.DevSettings.setIsDebuggingRemotely(true);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  // mount it on the Store
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSagas);

export default store;
