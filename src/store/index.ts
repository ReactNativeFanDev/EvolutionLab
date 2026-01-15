import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { rtkQueryErrorLogger } from './middleware/rtkQueryErrorLogger';
import { lessonsApi } from './api/lessonsApi';

let reactotron: any;
if (__DEV__) {
  reactotron = require('../../ReactotronConfig').default;
}

export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(lessonsApi.middleware)
      .concat(rtkQueryErrorLogger),
  enhancers: getDefaultEnhancers => {
    const enhancers = getDefaultEnhancers();
    if (__DEV__) {
      const reactotron = require('../../ReactotronConfig').default;
      return enhancers.concat(reactotron.createEnhancer());
    }
    return enhancers;
  },
  devTools: __DEV__,
});

export const persistor = persistStore(store);

if (__DEV__ && reactotron) {
  reactotron.setReduxStore?.(store);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
