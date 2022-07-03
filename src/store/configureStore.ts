/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import { createReducer } from './reducers';
import storage from 'redux-persist/lib/storage';
export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const persistConfig = {
    key: 'root',
    storage: storage,
  };

  const persistedReducer = persistReducer(persistConfig, createReducer());

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return store;
}
