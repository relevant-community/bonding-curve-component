import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { drizzleReducers, drizzleSagas } from 'drizzle';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all(drizzleSagas.map(saga => fork(saga)));
}

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(drizzleReducers),
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
    thunkMiddleware
  ))
);

sagaMiddleware.run(rootSaga);

export default store;
