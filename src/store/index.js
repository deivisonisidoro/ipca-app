import { applyMiddleware, createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { reducers } from '../reducers';
import thunk from 'redux-thunk';

const persistConfig = {
    key:'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = reducers && createStore(persistedReducer, applyMiddleware(thunk));
const persister = persistStore(store);
export { store , persister }