import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './saga';

// NativeModules.DevSettings.setIsDebuggingRemotely(true);

const sagaMiddleware = createSagaMiddleware();
const store = createStore( // mount it on the Store
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;

