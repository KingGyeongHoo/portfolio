import { legacy_createStore as createStore, combineReducers } from 'redux';
import { persistStore, persistReducer  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { modalOpenReducer} from './Reducers/modalOpenReducer';
import { projectReducer } from './Reducers/projectsInfoReducer';
import { ScrollReducer } from './Reducers/scrollReducer';
import { selectedIdxReducer } from './Reducers/selectedProjectIdx';

const reducers = combineReducers<any>({
  isOpen:modalOpenReducer,
  project: projectReducer,
  scroll: ScrollReducer,
  selectedIdx: selectedIdxReducer
})

const persistConfig = {
    key: "root", // localStorage key 
    storage, // localStorage
    whitelist: ["project"], // target (reducer name)
  }


const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store); 