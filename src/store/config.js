import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import favObjectsReducer from './reducers/favObjects';

export default createStore(favObjectsReducer);

const configPersist = {
    key: 'root',
    storage: AsyncStorage,
};

const reducerPersist = persistReducer(configPersist, favObjectsReducer);

export const Store = createStore(reducerPersist);
export const Persistor = persistStore(Store);