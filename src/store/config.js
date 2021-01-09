import { createStore } from 'redux';

import favObjectsReducer from './reducers/favObjects';

export default createStore(favObjectsReducer);