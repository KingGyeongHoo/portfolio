import { legacy_createStore as createStore, combineReducers } from 'redux';
import { persistStore, persistReducer  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { pageReducer } from './Reducers/pageReducer';
import { modalOpenReducer} from './Reducers/modalOpenReducer';
import { skillReducer } from './Reducers/skillsInfoReducer';
import { projectModalOpenReducer } from './Reducers/projectsModalOpenReducer';
import { projectReducer } from './Reducers/projectsInfoReducer';

const reducers = combineReducers<any>({
  page: pageReducer,
  isOpen:modalOpenReducer,
  skill:skillReducer,
  pIsOpen:projectModalOpenReducer,
  project: projectReducer
})

const persistConfig = {
    key: "root", // localStorage key 
    storage, // localStorage
    whitelist: ["skill", "project"], // target (reducer name)
  }


const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store); 