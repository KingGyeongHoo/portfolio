import { legacy_createStore as createStore, combineReducers } from 'redux';
import { persistStore, persistReducer  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { pageReducer } from './Reducers/pageReducer';
import { modalOpenReducer} from './Reducers/modalOpenReducer';
import { skillReducer } from './Reducers/skillsInfoReducer';

const reducers = combineReducers<any>({
  page: pageReducer,
  isOpen:modalOpenReducer,
  skill:skillReducer
})

const persistConfig = {
    key: "root", // localStorage key 
    storage, // localStorage
    whitelist: ["figureReducer"], // target (reducer name)
  }


const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store); 