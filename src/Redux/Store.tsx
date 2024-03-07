import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './Reducer';

const persistConfig = {
    key: "root", // localStorage key 
    storage, // localStorage
    whitelist: ["figureReducer"], // target (reducer name)
  }


const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store); 