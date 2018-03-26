import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { reducer, rootSaga } from 'drizzle';


// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
    thunkMiddleware
  ))
);

sagaMiddleware.run(rootSaga);

export default store;
